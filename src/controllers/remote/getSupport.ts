import axios from "axios";
import * as Device from "expo-device";
import * as Application from "expo-application";
import { Platform } from "react-native";
import * as Network from "expo-network";
import { appID, appToken, supportAPI, emailValidation } from "../../constants";

type ResponseTypes = {
	status: number;
	message: string;
	code: string;
};

export async function getSupport(fullName: string, email: string,	message: string): Promise<ResponseTypes> {
	const { isInternetReachable } = await Network.getNetworkStateAsync();

	if (!isInternetReachable) {
		return {
			status: 503,
			message: "Network service unavailable",
			code: "no_internet",
		};
	}

	if (!fullName) {
		return {
			status: 400,
			message: "Full name is null",
			code: "full_name_is_null",
		};
	}

	if (fullName.toString().length < 4 || fullName.toString().length > 50) {
		return {
			status: 400,
			message: `Full name length is invalid: ${fullName}`,
			code: "full_name_length_invalid",
		};
	}

	if (!email) {
		return {
			status: 400,
			message: "Email is null",
			code: "email_is_null",
		};
	}

	if (email.length > 50) {
		return {
			status: 400,
			message: `Email length more than 50 caracteres: ${email}`,
			code: "email_length_exceeded",
		};
	}

	if (!emailValidation.test(email)) {
		return {
			status: 400,
			message:`Email validation failed: ${email}`,
			code: "email_validation_failed",
		};
	}

	if (message === null || message.length < 10) {
		return {
			status: 400,
			message: "Message is null or less than 10 characters",
			code: "message_too_short",
		};
	}

	if (message.length > 1000) {
		return {
			status: 400,
			message: `Message length is more than 1000 characters`,
			code: "message_too_long",
		};
	}

	try {
		await axios.post(
			supportAPI,
			{
				email: email,
				fullName: fullName,
				subject: "Support",
				message: message,
				extra: {
					buid: Application.nativeBuildVersion,
					os: Platform.OS,
					osVersion: Platform.Version,
					brand: Application.applicationName,
					manufacturer: Device.manufacturer,
					model: Application.applicationId,
					release: Platform.Version,
				},
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
			message: "Support request sent successfully",
			code: "support_request_sent",
		};
	} catch (error: any) {
	return error.response.data;		
	}
}
