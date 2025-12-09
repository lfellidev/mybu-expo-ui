import React, { useEffect, useRef } from "react";
import { View, Animated } from "react-native";
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
    const opacity = useRef(new Animated.Value(0.5)).current;

    useEffect(() => {
        if (props.skeleton) {
            Animated.loop(
                Animated.sequence([
                    Animated.timing(opacity, { toValue: 1, duration: 500, useNativeDriver: true }),
                    Animated.timing(opacity, { toValue: 0.5, duration: 500, useNativeDriver: true }),
                ])
            ).start();
        }
    }, [props.skeleton]);

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
    
    if (props.skeleton) {
        return (
            <View style={styles.container}>
                <Animated.View
                    style={[
                        {
                            width: props.width || setPorcentageWidth(30),
                            height: props.height || setPorcentageWidth(30),
                            backgroundColor: '#e0e0e0',
                            opacity,
                        },
                        props.style,
                    ]}
                />
            </View>
        );
    }

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
            return <></>;
        }
}
};

export default LottieComponent;