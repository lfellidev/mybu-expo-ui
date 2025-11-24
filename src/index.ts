//Components
export {default as Alert} from "./components/Alert";
export {default as BottomSheet} from "./components/BottomSheet";
export {default as Button} from "./components/Button";
export {default as Checkbox} from "./components/Checkbox";
export {default as Container} from "./components/Container";
export {default as Countdown} from "./components/Countdown";
export {default as Feature} from "./components/Feature";
export {default as Group} from "./components/Group";
export {default as HeaderMenu} from "./components/HeaderMenu";
export {default as Icon} from "./components/Icon";
export {default as InputSpinner} from "./components/InputSpinner";
export {default as ListItem} from "./components/ListItems";
export {default as Select} from "./components/Select";
export {default as Skeleton} from "./components/Skeleton";
export {default as Switch} from "./components/Switch";
export {default as PricingCard} from "./components/PricingCard";
export {default as Text} from "./components/Text";
export {default as TextArea} from "./components/TextArea";
export {default as TextInput} from "./components/TextInput";
export {default as Update} from "./components/Update";
export {ThemeProvider} from "./components/ThemeProvider";
export {useTheme} from "./components/ThemeProvider";
export {default as Lottie} from "./components/Lottie";

//Controllers
export {capitalize} from "./controllers/capitalize";
export {formatTime} from "./controllers/formatTime";
export {generateID} from "./controllers/generateID";
export {reload} from "./controllers/reload";
export {setFontScale} from "./controllers/setFontScale";
export {setLowerCase} from "./controllers/setLowerCase";
export {setPorcentageHeight} from "./controllers/setPorcentageHeight";
export {setPorcentageWidth} from "./controllers/setPorcentageWidth";
export {setResponsiveSize} from "./controllers/setResponsiveSize";
export {shuffle} from "./controllers/shuffle";
export {shuffleInt} from "./controllers/shuffleInt";
export {sortArray} from "./controllers/sortArray";
export {strToBoolean} from "./controllers/strToBoolean";
export {useIsEmulator} from "./controllers/useIsEmulator";

export {login} from "./controllers/remote/login";
export {signup} from "./controllers/remote/signup";
export {getRemoteConfig} from "./controllers/remote/getRemoteConfig";
export {requestNewCode} from "./controllers/remote/requestNewCode";
export {verifyCode} from "./controllers/remote/verifyCode";
export {verifyToken} from "./controllers/remote/verifyToken";
export {verifyCoupon} from "./controllers/remote/verifyCoupon";

export {getSupport} from "./controllers/remote/getSupport";
export {resetPassword} from "./controllers/remote/resetPassword";
export {resetPasswordVerify} from "./controllers/remote/resetPasswordVerify";
export {updateEmail} from "./controllers/remote/updateEmail";
export {updateEmailVerify} from "./controllers/remote/updateEmailVerify";
export {updatePassword} from "./controllers/remote/updatePassword";
export {updateProfile} from "./controllers/remote/updateProfile";


export {setValue} from "./controllers/remote/customs/setValue";
export {getValue} from "./controllers/remote/customs/getValue";
export {deleteValue} from "./controllers/remote/customs/deleteValue";
export {deleteAccount} from "./controllers/remote/deleteAccount";

export {goToStore} from "./controllers/goToStore";
export { activateKeepAwakeAsync, deactivateKeepAwake } from 'expo-keep-awake';
export * as Battery from 'expo-battery';

//Vars
export {colors} from "./palettes";
export {applicationData} from "./constants";
export {constantsData} from "./constants";
export {deviceData} from "./constants";
export {appStoreData} from "./constants";
export {statusbarHeight} from "./constants";
export {deviceLanguage} from "./constants";

//Sounds
import beepSound from "./assets/sounds/beep.mp3";
export { beepSound };

import clickSound from "./assets/sounds/click.mp3";
export { clickSound };

import purchased from "./assets/sounds/purchased.mp3";
export { purchased };

import sentSound from "./assets/sounds/sent.mp3";
export { sentSound };

import tintinSound from "./assets/sounds/tintin.mp3";
export { tintinSound };

import unlockSound from "./assets/sounds/unlock.mp3";
export { unlockSound };