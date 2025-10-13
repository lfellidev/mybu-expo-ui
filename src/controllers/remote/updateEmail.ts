import axios from "axios";
import * as Network from "expo-network";
import { appID, appToken, updateEmailAPI } from "../../constants";

type ResponseTypes = {
	status: number;
	message: string;
	code: string;
};

export async function updateEmail(
	jwt: string,
	email: string,
	newEmail: string,
	newEmailConfirm: string
): Promise<ResponseTypes> {
	const { isInternetReachable } = await Network.getNetworkStateAsync();
	if (isInternetReachable == false) {
		return {
			status: 503,
			message: "Network service unavailable",
			code: "no_internet",
		};
	}

	if (email == newEmail) {
		return {
			status: 400,
			message: "New email cannot be the same as the current email",
			code: "email_no_change",
		};
	}

	if (newEmail != newEmailConfirm) {
		return {
			status: 400,
			message: "New email and confirmation do not match",
			code: "email_mismatch",
		};
	}

	try {
		await axios.post(updateEmailAPI, {
				email: email,
				newEmail: newEmail,
			},	{
				headers: {
					id: appID,
					token: appToken,
					jwt: jwt,
				},
			}
		);
		return {
			status: 200,
			message: "Email updated successfully",
			code: "email_updated",
		};
	} catch (error: any) {
	return error.response.data;		
	}
}
