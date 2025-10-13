import axios from "axios";
import * as Network from "expo-network";
import { appID, appToken, deleteAPI, emailValidation } from "../../constants";

type ResponseTypes = {
	status: number;
	message: string;
	debugMessage: string;
	code: string;
};

export async function deleteAccount(
	jwt: string,
	email: string,
	password: string
): Promise<ResponseTypes> {
	const { isInternetReachable } = await Network.getNetworkStateAsync();
	if (isInternetReachable == false) {
		return {
			status: 503,
			message: "Network service unavailable",
			debugMessage: "Network service unavailable",
			code: "no_internet",
		};
	}

	if (email === null) {
		return {
			status: 400,
			message: "Email is null",
			debugMessage: "Email is null",
			code: "email_is_null",
		};
	}

	if (!emailValidation.test(email)) {
		return {
			status: 400,
			message: `emailValidation failed: ${email}`,
			debugMessage: `emailValidation failed: ${email}`,
			code: "email_validation_failed",
		};
	}

	if (password === null) {
		return {
			status: 400,
			message: "Password is null",
			debugMessage: "Password is null",
			code: "password_is_null",
		};
	}

	try {
		await axios.post(deleteAPI,	{
			email,
			password,
		}, {
			headers: {
				id: appID,
				token: appToken,
				jwt: jwt,
			},
		}
		);
		return {
			status: 200,
			message: "Account deleted successfully",
			debugMessage: "Account deleted successfully",
			code: "account_deleted_successfully",
		};
	} catch (error: any) {
		return error.response.data;		
	}
}
