import { Platform } from "react-native";
import * as Application from 'expo-application';
import * as Device from 'expo-device';

import {googleStore, appleStore, appleRevenueCat, googleRevenueCat} from "../constants"

export function getInfo() {
	return {
		buildID: Application.nativeApplicationVersion ?? "0.0.0",
		deviceName: Device.deviceName ?? "unknown",
		osBuildId: Device.osBuildId,
		os: Platform.OS,
		version: Platform.Version,
		isDevice: Device.isDevice,
		deviceType: Device.deviceType ?? "unknown",
		deviceYearClass: Device.deviceYearClass,
		productName: Device.productName,
		supportedCpuArchitectures: Device.supportedCpuArchitectures,
		totalMemory: Device.totalMemory,
		brand: Device.brand ?? "unknown",
		manufacturer: Device.manufacturer ?? "unknown",
		model: Device.modelName ?? "unknown",
		release: Device.osVersion ?? "unknown",
		fingerprint: Device.osBuildFingerprint ?? "unknown",
		bundleID: Application.applicationId ?? "unknown",
		storeUrl: Platform.OS === "android" ? googleStore : Platform.OS === "ios" ? appleStore : "unknown",
		revenuecatId: Platform.OS === "android" ? googleRevenueCat : Platform.OS === "ios" ? appleRevenueCat : "unknown",
	}
}