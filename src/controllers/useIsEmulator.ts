import { Platform } from "react-native";
import * as Device from 'expo-device';

export function useIsEmulator(): boolean{
	let isEmulator: boolean = false;

	if (Platform.OS === 'ios') {
		isEmulator = !Device.isDevice; 
	} else if (Platform.OS === 'android') {
		const deviceName = (Device.modelName || "Generic").toLowerCase();
		isEmulator = deviceName.includes('sdk') || deviceName.includes('emulator') || deviceName.includes('generic');
		isEmulator = !Device.isDevice;
	}
	return isEmulator;
};