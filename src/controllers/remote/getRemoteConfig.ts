import axios from "axios";
import { appID, appToken, remoteConfigAPI } from "../../constants";


export async function getRemoteConfig(): Promise<any> {
	try {
		const data = await axios.post(
			remoteConfigAPI, {}, {
				headers: {
					id: appID,
					token: appToken,
				},
			}
			
		);
		
		return {
			status: 200,
			message: "Remote config fetched successfully",
			code: "remote_config_fetched",
			data: data.data,
		};
	} catch (error: any) {
		return error.response.data;		
	}
}
