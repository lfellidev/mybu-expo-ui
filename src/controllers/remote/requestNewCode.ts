import axios from "axios";
import * as Network from "expo-network";

import {
	appID,
	appToken,
	resendVerifyAPI,
	emailValidation,
} from "../../constants";

type ResponseTypes = {
	status: number;
	message: string;
	code: string;
};

export async function requestNewCode(email: string): Promise<ResponseTypes> {
	const { isInternetReachable } = await Network.getNetworkStateAsync();
	if (isInternetReachable == false) {
		return {
			status: 503,
			message: "Network service unavailable",
			code: "no_internet",
		};
	}

	if (email === "" || email === null) {
		return {
			status: 400,
			message: "Email is null",
			code: "email_required",
		};
	}

	if (!emailValidation.test(email)) {
		return {
			status: 400,
			message: "Email format is invalid: " + email,
			code: "email_format_invalid",
		};
	}

	try {
		await axios.post(
			resendVerifyAPI,
			{
				email: email,
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
			message: "Verification code sent successfully",
			code: "verification_code_sent",
		};
	} catch (error: any) {
		return error.response.data;		
	}
}
