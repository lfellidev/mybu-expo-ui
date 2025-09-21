import axios from "axios";
import * as Network from "expo-network";
import {
	appID,
	appToken,
	customDeleteAPI,
	emailValidation,
} from "../../../constants";


type ResponseTypes = {
	status: number;
	message: string;
	code: string;
};

export async function deleteValue(
	jwt: string,
	email: string,
	customId: string
): Promise<ResponseTypes> {
	const { isInternetReachable } = await Network.getNetworkStateAsync();
	if (isInternetReachable == false) {
		return {
			status: 503,
			message: "Network service unavailable",
			code: "no_internet",
		};
	}

	if (email === null) {
		return {
			status: 400,
			message: "Email is null",
			code: "email_is_null",
		};
	}

	if (!emailValidation.test(email)) {
		return {
			status: 400,
			message: `emailValidation failed: ${email}`,
			code: "email_validation_failed",
		};
	}

	if (customId === null || customId === undefined) {
		return {
			status: 400,
			message: "Custom ID is null or undefined",
			code: "custom_id_is_null_or_undefined",
		};
	}

	try {
		await axios.post(
			customDeleteAPI,
			{
				email,
				customId,
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
			message: "Value deleted successfully",
			code: "value_deleted",
		};
	} catch (error: any) {
		if (error.response?.status === 404) {
			return {
				status: 404,
				message: error.message,
				code: "not_found",
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
