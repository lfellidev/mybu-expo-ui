import axios from "axios";
import * as Network from "expo-network";

import { appID, appToken, updateAPI} from "../../constants";

type ResponseTypes = {
	status: number;
	message: string;
	code: string;
};

export async function updateProfile(
	jwt: string,
	email: string,
	fullName: string,
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
			message: "Full name is required",
			code: "full_name_is_null",
		};
	}

	if (typeof fullName != "undefined") {
		if (fullName.length < 3 || fullName.length > 50) {
			return {
				status: 400,
				message: "Full name length is invalid",
				code: "full_name_length_invalid",
			};
		}
	}

	const timestamp = new Date().getTime();
	try {
		await axios.post(updateAPI,	{
			email: email,
			fullName: fullName,
			language: language,
			subscribed: subscribed,
			updatedAt: timestamp,
			profile: profile,
		}, {
			headers: {
				token: appToken,
				id: appID,
				jwt: jwt,
			},
		}
	);
		return {
			status: 200,
			message: "Profile updated successfully",
			code: "profile_updated",
		};
	} catch (error: any) {
	return error.response.data;		
	}
}
