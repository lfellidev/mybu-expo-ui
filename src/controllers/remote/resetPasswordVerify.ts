import axios from "axios";
import * as Network from "expo-network";

import {
	appID,
	appToken,
	forgotAPIVerify,
	emailValidation,
} from "../../constants";

type ResponseTypes = {
	status: number;
	message: string;
	code: string;
};

export async function resetPasswordVerify(
	emailInput: string,
	codeInput: number | null = null,
	newPasswordInput: string = "",
	newPasswordConfirmInput: string = ""
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

	try {
		if (newPasswordInput !== newPasswordConfirmInput) {
			return {
				status: 400,
				message: "New password and confirmation do not match",
				code: "password_mismatch",
			};
		}

		if (newPasswordInput.length < 8) {
			return {
				status: 400,
				message: "New password is too short",
				code: "password_too_short",
			};
		}

		if (newPasswordInput.length > 50) {
			return {
				status: 400,
				message: "New password is too long",
				code: "password_too_long",
			};
		}
	
		await axios.post(forgotAPIVerify,	{
				email: emailInput,
				code: codeInput,
				newPassword: newPasswordInput,
			}, {
				headers: {
					id: appID,
					token: appToken,
				},
			}
		);
		return {
			status: 200,
			message: "Password has been reset successfully",
			code: "password_reset_success",
		};
	} catch (error: any) {
	return error.response.data;		
	}
}
