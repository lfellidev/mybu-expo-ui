import axios from "axios";
import * as Network from "expo-network";

import {
	appID,
	appToken,
	forgotAPI,
	emailValidation,
} from "../../constants";

type ResponseTypes = {
	status: number;
	message: string;
	code: string;
};

export async function resetPassword(
	emailInput: string
): Promise<ResponseTypes> {
	
	const { isInternetReachable } = await Network.getNetworkStateAsync();
	if (isInternetReachable == false) {
		return {
			status: 503,
			message: "Network service unavailable",
			code: "no_internet",
		};
	}

	if (emailInput === null) {
		return {
			status: 400,
			message: "Email is null",
			code: "email_is_null",
		};
	}

	if (!emailValidation.test(emailInput)) {
		return {
			status: 400,
			message: "Email format is invalid",
			code: "email_format_invalid",
		};
	}

	if (emailInput.length < 3 || emailInput.length > 50) {
		return {
			status: 400,
			message: "Email length is invalid",
			code: "email_length_invalid",
		};
	}

	try {
		await axios.post(forgotAPI, {
				email: emailInput,
		},	{
			headers: {
				id: appID,
				token: appToken,
			},
		});
		return {
			status: 200,
			message: "Recovery email sent successfully",
			code: "recovery_email_sent",
		};
	} catch (error: any) {
		if (error.response?.status === 401) {
			return {
				status: 401,
				message: error.message,
				code: "unauthorized",
			};
		} else if (error.response?.status === 404) {
			return {
				status: 404,
				message: error.message,
				code: "email_not_found",
			};
		} else {
			return {
				status: 400,
				message: error.message,
				code: "unknown_error",
			};
		}
	}
}
