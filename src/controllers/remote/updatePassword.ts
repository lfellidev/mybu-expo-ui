import axios from "axios";
import * as Network from "expo-network";
import { appID, appToken, updatePasswordAPI } from "../../constants";

type ResponseTypes = {
	status: number;
	message: string;
	code: string;
};

export async function updatePassword(
	jwt: string,
	email: string,
	password: string,
	newPassword: string,
	newPasswordConfirm: string
): Promise<ResponseTypes> {
	const { isInternetReachable } = await Network.getNetworkStateAsync();
	if (isInternetReachable == false) {
		return {
			status: 503,
			message: "Network service unavailable",
			code: "no_internet",
		};
	}
	if (password === null) {
		return {
			status: 400,
			message: "Current password is required",
			code: "password_is_null",
		};
	}

	if (newPassword === null) {
		return {
			status: 400,
			message: "New password is required",
			code: "new_password_is_null",
		};
	}

	if (typeof newPassword !== "undefined") {
		if (newPassword.length < 8) {
			return {
				status: 400,
				message: "New password must be at least 8 characters long",
				code: "new_password_length_invalid",
			};
		}

		if (newPassword.length > 50) {
			return {
				status: 400,
				message: "New password must not exceed 50 characters",
				code: "new_password_length_exceeded",
			};
		}
	}

	if (newPasswordConfirm === null) {
		return {
			status: 400,
			message: "New password confirmation is required",
			code: "new_password_confirm_is_null",
		};
	}

	if (newPassword !== newPasswordConfirm) {
		return {
			status: 400,
			message: "New password confirmation does not match",
			code: "new_password_confirm_mismatch",
		};
	}

	if (password == newPassword) {
		return {
			status: 400,
			message: "New password must be different from the current password",
			code: "new_password_same_as_current",
		};
	}

	try {
		await axios.post(
			updatePasswordAPI,
			{
				email: email,
				password: password,
				newPassword: newPassword,
			},
			{
				headers: {
					id: appID,
					token: appToken,
					jwt: jwt,
				},
			}
		);
		return {
			status: 200,
			message: "Password updated successfully",
			code: "password_updated_successfully",
		};
	} catch (error: any) {
		if (error.response?.status === 401) {
			return {
				status: 400,
				message:error.message,
				code: "unauthorized",
			};
		} else if (error.response?.status === 404) {
			return {
				status: 400,
				message: error.message,
				code: "email_not_found",
			};
		} else if (error.response?.status === 412) {
			return {
				status: 400,
				message: error.message,
				code: "invalid_credentials",
			};
		} else if (error.response?.status === 423) {
			return {
				status: 423,
				message: error.message,
				code: "user_blocked",
			};
		} else {
		return error.response.data;		
		}
	}
}
