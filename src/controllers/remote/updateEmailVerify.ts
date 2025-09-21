import axios from "axios";
import * as Network from "expo-network";
import { appID, appToken, updateEmailVerifyAPI } from "../../constants";

type ResponseTypes = {
	status: number;
	message: string;
	code: string;
};

export async function updateEmailVerify(
	jwtInput: string,
	email: string,
	newEmail: string,
	verificationCode: string
): Promise<ResponseTypes> {
	const { isInternetReachable } = await Network.getNetworkStateAsync();
	if (isInternetReachable == false) {
		return {
			status: 503,
			message: "Network service unavailable",
			code: "no_internet",
		};
	}

	if (verificationCode === null) {
		return {
			status: 400,
			message: "Verification code is null",
			code: "code_is_null",
		};
	}

	if (verificationCode.toString().length != 6) {
		return {
			status: 400,
			message: "Verification code length is invalid",
			code: "code_length_invalid",
		};
	}

	try {
		await axios.post(updateEmailVerifyAPI, {
				email: email,
				newEmail: newEmail,
				code: parseInt(verificationCode),
			}, {
				headers: {
					id: appID,
					token: appToken,
					jwt: jwtInput,
				},
			}
		);
		return {
			status: 200,
			message: "Email verified successfully",
			code: "email_verified",
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
				code: "email_not_found",
			};
		}
		if (error.response?.status === 412) {
			return {
				status: 412,
				message: error.message,
				code: "email_in_use",
			};
		} else if (error.response?.status === 423) {
			return {
				status: 423,
				message: error.message,
				code: "account_blocked",
			};
		} else {
			return {
				status: 400,
				message: error.message,
				code: error.message,
			};
		}
	}
}
