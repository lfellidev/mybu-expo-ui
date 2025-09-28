import React from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";
import styles from "./styles";
import { setPorcentageWidth } from "../../controllers/setPorcentageWidth";
import type { LottieTypes } from "./types";

import byeJson from "./libraries/bye.json";
import cautionJson from "./libraries/caution.json";
import confettiJson from "./libraries/confetti.json";
import crownJson from "./libraries/crown.json";
import errorJson from "./libraries/error.json";
import giftJson from "./libraries/gift.json";
import hatJson from "./libraries/hat.json";
import passwordJson from "./libraries/password.json";
import sadJson from "./libraries/sad.json";
import starJson from "./libraries/star.json";
import successJson from "./libraries/success.json";
import syncedJson from "./libraries/synced.json";
import thumbsUpJson from "./libraries/thumbsup.json";
import thumbsDownJson from "./libraries/thumbsdown.json";
import unlockJson from "./libraries/unlock.json";


const LottieComponent: React.FC<LottieTypes> = (props): React.JSX.Element => {
	const object =
	props.name === "bye" ? byeJson :
	props.name==="caution" ? cautionJson :
	props.name==="confetti" ? confettiJson :
	props.name==="crown" ? crownJson :
	props.name==="error" ? errorJson :
	props.name==="gift" ? giftJson :
	props.name==="hat" ? hatJson :
	props.name==="password" ? passwordJson :
	props.name==="sad" ? sadJson :
	props.name=="star" ? starJson :
	props.name==="success" ? successJson :
	props.name==="synced" ? syncedJson :
	props.name=="thumbs-up" ? thumbsUpJson :
	props.name=="thumbs-down" ? thumbsDownJson :
	props.name==="unlock" ? unlockJson :
	null;
	
	if (props.src) {
		return  (
  		<View style={styles.container}>
    		<LottieView
      		source={props.src}
      		autoPlay={props.autoPlay || props.autoplay || true}
      		loop={Boolean(props.loop) || false}
      		style={[
						{
          		width: props.width || setPorcentageWidth(30),
          		height: props.height || setPorcentageWidth(30),
        		},
       	 		props.style,
      		]}
   	 		/>
			</View>
		);
	} else {
		if (object) {
			return  (
				<View style={styles.container}>
					<LottieView
						source={object}
						autoPlay={props.autoPlay || props.autoplay || true}
						loop={Boolean(props.loop) || false}
						style={[
							{
								width: props.width || setPorcentageWidth(30),
								height: props.height || setPorcentageWidth(30),
							},
							props.style,
						]}
					/>
				</View>
			);
		} else {
			console.warn("Lottie: You must provide a valid 'name' prop or a 'src' prop.");
			return <></>;
		}
}
};

export default LottieComponent;