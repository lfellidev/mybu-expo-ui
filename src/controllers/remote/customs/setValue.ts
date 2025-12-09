import axios from "axios";
import * as Network from "expo-network";
import {
	appID,
	appToken,
	customSetAPI,
	emailValidation,
} from "../../../constants";


type ResponseTypes = {
	status: number;
	message: string;
	code?: string;

};

export async function setValue(
	jwt: string,
	email: string,
	data: object | object[]
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

	if (data === null || (Array.isArray(data) && data.length === 0)) {
		return {
			status: 400,
			message: "Data is null or empty",
			code: "data_is_null_or_empty",
		};
	}

	try {
		await axios.post(
			customSetAPI,
			{
				email,
				data,
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
			message: "Value set successfully",
			code: "value_set_successfully",
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
