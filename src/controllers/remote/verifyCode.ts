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
		if (error.response?.status === 401) {
			return {
				status: 401,
				message: error.message,
				code: "invalid_code",
			};
		} else if (error.response?.status === 404) {
			return {
				status: 404,
				message: error.message,
				code: "email_not_found",
			};
		} else if (error.response?.status === 412) {
			return {
				status: 412,
				message: error.message,
				code: "precondition_failed",
			};
		} else if (error.response?.status === 423) {
			return {
				status: 423,
				message: error.message,
				code: "user_blocked",
			};
		} else {
			return {
				status: 400,
				message: error.message,
				code: "general_error",
			};
		}
	}
}
