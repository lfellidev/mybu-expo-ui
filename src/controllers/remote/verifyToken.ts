import axios from "axios";
import * as Network from "expo-network";
import { appID, appToken, verifyTokenAPI } from "../../constants";

type ResponseTypes = {
	status: number;
	message: string;
	code: string;
};

export async function verifyToken(emailInput: string, tokenInput: string): Promise<ResponseTypes> {
	const { isInternetReachable } = await Network.getNetworkStateAsync();
	if (isInternetReachable == false) {
		return {
			status: 503,
			message: "Network service unavailable",
			code: "no_internet",
		};
	}


	const makeRequest = async () => {
		return await axios.post(
			verifyTokenAPI, {
				email: emailInput,
			}, 	{
				headers: {
					id: appID,
					token: appToken,
					jwt: tokenInput,
				},
			}
		);
	};

	for (let attempt = 1; attempt <= 3; attempt++) {
		try {
			await makeRequest();
			return {
				status: 200,
				message: "Token verification successful",
				code: "token_verification_successful",
			};
		} catch (error: any) {
			return error.response.data;		
		}
	}
	return {
		status: 400,
		message: "Token verification failed after multiple attempts",
		code: "token_verification_failed",
	};
}
