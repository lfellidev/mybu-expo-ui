import axios from "axios";
import * as Network from "expo-network";
import { appID, appToken, signupVerifyAPI } from "../../constants";

type ResponseTypes = {
	status: number;
	message: string;
	code: string;
};

export async function verifyCode(
	emailInput: string,
	codeInput: string
): Promise<ResponseTypes> {
	const { isInternetReachable } = await Network.getNetworkStateAsync();
	if (isInternetReachable == false) {
		return {
			status: 503,
			message: "Network service unavailable",
			code: "no_internet",
		};
	}

	if (codeInput === null) {
		return {
			status: 400,
			message: "Verification code is null",
			code: "code_required",
		};
	}

	if (codeInput.toString().length != 6) {
		return {
			status: 400,
			message: "Verification code must be 6 digits",
			code: "code_length_invalid",
		};
	}

	try {
		await axios.post(signupVerifyAPI,	{
				email: emailInput,
				code: codeInput,
			}, {
				headers: {
					id: appID,
					token: appToken,
				},
			}
		);
		return {
			status: 200,
			message: "Verification successful",
			code: "verification_successful",
		};
	} catch (error: any) {
return error.response.data;		
	}
}
