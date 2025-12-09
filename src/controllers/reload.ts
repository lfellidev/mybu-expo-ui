import * as Updates from 'expo-updates';
import { DevSettings } from 'react-native';
import {useIsEmulator} from "./useIsEmulator";

export async function reload(): Promise<void>{
  try {
		const emulator = useIsEmulator();
    if(emulator){
			 DevSettings.reload(); 
			await Updates.reloadAsync();
    } else {
     await Updates.reloadAsync();
    }
  } catch {
    await Updates.reloadAsync();
  }
}