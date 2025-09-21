import axios from "axios";
import * as Network from "expo-network";
import { appID, appToken, loginAPI, emailValidation } from "../../constants";

type ResponseTypes = {
	status: number;
	message: string;
	data?: object;
	code?: string;
};

export async function login(
	emailInput: string,
	passwordInput: string
): Promise<ResponseTypes> {
	const { isInternetReachable } = await Network.getNetworkStateAsync();
	if (isInternetReachable == false) {
		return {
			status: 503,
			message: "Network service unavailable",
			code: "no_internet",
		};
	}

	if (emailInput === "" || emailInput === null) {
		return {
			status: 400,
			message: "Email is null",
			code: "email_is_null",
		};
	}

	if (!emailValidation.test(emailInput)) {
		return {
			status: 400,
			message: "Email validation failed",
			code: "email_validation_failed",
		};
	}

	if (passwordInput === "" || passwordInput === null) {
		return {
			status: 400,
			message: "Password is null",
			code: "password_is_null",
		};
	}

	if (passwordInput.length < 8) {
		return {
			status: 400,
			message: "Password too short",
			code: "password_too_short",
			
		};
	}

	if (passwordInput.length > 50) {
		return {
			status: 400,
			message: "Password length exceeded",
			code: "password_length_exceeded",
		};
	}

	try {
		const data = await axios.post(
			loginAPI,
			{
				email: emailInput,
				password: passwordInput,
			},
			{
				headers: {
					id: appID,
					token: appToken,
				},
			}
		);

		return {
			status: 200,
			message: "Login successful",
			code: "login_successful",
			data: data.data,
		};
	} catch (error: any) {
		if (error.response?.status === 403) {
			return {
				status: 403,
				message:  error.message,
				code: "invalid_credentials",
			};
		} else if (error.response?.status === 404) {
			return {
				status: 404,
				message: error.message,
				code: "user_not_found",
			};
		} else if (error.response?.status === 412) {
			return {
				status: 400,
				message: error.message,
				code: "invalid_request",
			};
		} else if (error.response?.status === 423) {
			return {
				status: 423,
				message: "User is blocked",
				code: "user_blocked",
			};
		} else {
			return {
				status: 400,
				message: error.message,
				code: "general_error"
			};
		}
	}
}
