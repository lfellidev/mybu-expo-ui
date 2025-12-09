import React, { useEffect, useState } from "react";
import * as Application from 'expo-application';
import {appleRevenueCat, googleRevenueCat} from "../../constants";
import { Linking, Platform } from "react-native";
import VersionCheck from "react-native-version-check";
import BottomSheet from "../../components/BottomSheet";


type UpdateComponentProps = {
	disabled?: boolean;
	text: string;
	confirmLabel: string;
	cancelLabel: string;
}

const UpdateComponent: React.FC<UpdateComponentProps> = (props) => {
	const [visibleBottomSheet, setVisibleBottomSheet] = useState<boolean>(false);
	const disabled = props.disabled || false;
 
	useEffect(() => {
		async function getupdate() {
     	try {
       	const providerStore = Platform.OS == "android" ? "playStore" : "appStore";
				const lastVersion = await VersionCheck.getLatestVersion({provider: providerStore});
				const localVersion = Application.nativeApplicationVersion ?? "0.0.0";
				const localVersionInt = parseInt(localVersion.replace(/\./g, ""));
				const lastVersionInt = parseInt(lastVersion.replace(/\./g, ""));

				if (localVersionInt < lastVersionInt) {
					setVisibleBottomSheet(true);
				}

     		return null;	
			} catch  {
        return null;
      }
    };

		if (!disabled) {
			getupdate();
		}

	}, []);

  return (
		<>
    	<BottomSheet
      	visible={visibleBottomSheet}
      	onClose={() => setVisibleBottomSheet(false)}
      	text={props.text}
      	buttons={{
					primary: {
						label: props.confirmLabel,
				onPress: () => {
					if (Platform.OS === "android") {
						if (googleRevenueCat) {
							Linking.openURL(googleRevenueCat);
						}
					} else {
						if (appleRevenueCat) {
							Linking.openURL(appleRevenueCat);
						}
					}
					setVisibleBottomSheet(false);
				},						
					},
					secondary: {
						label: props.cancelLabel,
						onPress: () => setVisibleBottomSheet(false),
					},
				}}
    	/>
		</>
  );
};

export default UpdateComponent;