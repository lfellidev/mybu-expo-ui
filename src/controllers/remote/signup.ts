import axios from "axios";
import * as Network from "expo-network";

import { appID, appToken, emailValidation, signupAPI } from "../../constants";

type ResponseTypes = {
	status: number;
	message: string;
	code: string;
};

export async function signup(
	fullName: string,
	email: string,
	password: string,
	acceptedTerms: boolean,
	subscribed: boolean,
	profile: object,
	language: string
): Promise<ResponseTypes> {
	const { isInternetReachable } = await Network.getNetworkStateAsync();
	if (isInternetReachable == false) {
		return {
			status: 503,
			message: "Network service unavailable",
			code: "no_internet",
		};
	}

	if (fullName === "" || fullName === null) {
		return {
			status: 400,
			message: "Full name is null",
			code: "full_name_required",
		};
	}

	if (fullName.length < 3 || fullName.length > 50) {
		return {
			status: 400,
			message: "Full name length is invalid: " + fullName,
			code: "full_name_length_invalid",
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

	if (email.length < 3 || email.length > 50) {
		return {
			status: 400,
			message: "Email length is invalid: " + email,
			code: "email_length_invalid",
		};
	}

	if (password === "" || password === null || password.length < 8) {
		return {
			status: 400,
			message: "password is null or less than 8 characters: " + password,
			code: "password_length_invalid",
		};
	}

	if (password.length > 50) {
		return {
			status: 400,
			message: "password is more than 50 characters: " + password,
			code: "password_length_invalid",
		};
	}

	if (!acceptedTerms) {
		return {
			status: 400,
			message: "Terms must be accepted",
			code: "terms_must_accepted",
		};
	}

	try {
		await axios.post(signupAPI, {
				fullName: fullName,
				password: password,
				email: email,
				language: language,
				subscribed: subscribed,
				profile: profile || {},
			}, {
				headers: {
					id: appID,
					token: appToken,
				},
			}
		);
		return {
			status: 200,
			message: "Signup successful",
			code: "signup_successful",
		};
	} catch (error: any) {
	return error.response.data;		
	}
}
