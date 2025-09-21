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
			if (error.response?.status === 401) {
				return {
					status: 401,
					message: error.message,
					code: "unauthorized",
				};
			}
			if (error.response?.status === 404) {
				return {
					status: 404,
					message: error.message,
					code: "not_found",
				};
			}
			if (error.response?.status === 412) {
				return {
					status: 412,
					message: error.message,
					code: "precondition_failed",
				};
			}
			if (error.response?.status === 423) {
				return {
					status: 423,
					message: error.message,
					code: "user_blocked",
				};
			}

			if (attempt === 3) {
					return {
					status: 400,
					message: error.message,
					code: "general_error",
				};
			}
		}
	}

	return {
		status: 400,
		message: "Unknown error occurred",
		code: "general_error",
	};
}
