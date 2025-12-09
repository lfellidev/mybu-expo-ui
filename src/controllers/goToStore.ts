import { googleStore, appleStore } from "../constants"
import { Platform, Linking } from "react-native";

export async function goToStore() {
	const url = Platform.OS === "android" ? googleStore : appleStore;
	if (typeof url === "string") {
		await Linking.openURL(url);
	} else {
		return;

	}
}