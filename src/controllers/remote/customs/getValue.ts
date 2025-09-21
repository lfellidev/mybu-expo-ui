import axios from "axios";
import * as Network from "expo-network";
import {
	appID,
	appToken,
	customGetAPI,
	emailValidation,
} from "../../../constants";


type ResponseTypes = {
	status: number;
	data?: object | object[];
	message?: string;
	code: string;
};

export async function getValue(
	jwt: string,
	email: string
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

	try {
		const data = await axios.post(
			customGetAPI,
			{
				jwt,
				email,
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
			message: "Value retrieved successfully",
			code: "value_retrieved_successfully",
			data: data.data,
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
