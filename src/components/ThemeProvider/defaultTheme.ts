import Constants from "expo-constants";
import { colors } from "../../palettes";
import { setFontScale } from "../../controllers/setFontScale";
import { setPorcentageHeight } from "../../controllers/setPorcentageHeight";
import { setPorcentageWidth } from "../../controllers/setPorcentageWidth";
import { setResponsiveSize } from "../../controllers/setResponsiveSize";


export const defaultTheme = {
	alert: {
		fontSize: setFontScale(14),
		fontWeight: 700,
		textAlign: "left",
		paddingTop: Constants.statusBarHeight,
		paddingBottom: Constants.statusBarHeight / 2,
		paddingHorizontal: setPorcentageWidth(5),
		
	
		danger: {
			backgroundColor: colors.safari.fireAnt,
			color: colors.safari.snow,
		},
		success: {
			backgroundColor: colors.safari.featherGreen,
			color: colors.safari.snow,
		},
		info: {
			backgroundColor: colors.safari.whale,
			color: colors.safari.snow,
		},
	},

	backgroundColor: colors.safari.snow,

	bottomSheet: {
		closeColor: colors.safari.hare,
		backgroundColor: colors.safari.snow,
		color: colors.safari.greyWolf,
		fontSize: setFontScale(14),
		overlayColor: colors.safari.blackPanther,
		paddingBottom: setPorcentageWidth(5),
		borderTopLeftRadius: 12,
		borderTopRightRadius: 12,
		paddingHorizontal: 16,
		paddingTop: 8,
		maxHeight: '80%',	
		textPaddingTop: 0,
		textPaddingRight: 0,
		textPaddingBottom: setPorcentageHeight(5),
		textPaddingLeft: 0,

	},

	button: {
		borderRadius: 10,
		marginTop: 0,
		marginRight: 0,
		marginBottom: setPorcentageHeight(5),
		marginLeft: 0,
		width: "100%",
		primary: {
			backgroundColor: colors.safari.macaw,
			textColor: colors.safari.snow,
			rippleColor: colors.safari.narwhal,
			ActivityIndicatorColor: colors.safari.snow,
			borderTopWidth: 0,
			borderRightWidth: 0,
			borderBottomWidth: 9,
			borderLeftWidth: 0,
			borderTopColor: "transparent",
			borderRightColor: "transparent",
			borderBottomColor: colors.safari.humpback,
			borderLeftColor: "transparent",
		},
		secondary: {
			backgroundColor: colors.safari.polar,
			textColor: colors.safari.blackPanther,
			rippleColor: colors.safari.narwhal,
			ActivityIndicatorColor: colors.safari.blackPanther,
			borderTopWidth: 0,
			borderRightWidth: 0,
			borderBottomWidth: 9,
			borderLeftWidth: 0,
			borderTopColor: "transparent",
			borderRightColor: "transparent",
			borderBottomColor: colors.safari.hare,
			borderLeftColor: "transparent",
		},
		tertiary: {
			backgroundColor: "transparent",
			textColor: colors.safari.blackPanther,
			rippleColor: "transparent",
			ActivityIndicatorColor: colors.safari.blackPanther,
			borderTopWidth: 0,
			borderRightWidth: 0,
			borderBottomWidth: 0,
			borderLeftWidth: 0,
			borderTopColor: "transparent",
			borderRightColor: "transparent",
			borderBottomColor: "transparent",
			borderLeftColor: "transparent",
	
		},
		link: {
			backgroundColor: "transparent",
			textColor: colors.safari.macaw,
			rippleColor: "transparent",
			ActivityIndicatorColor: colors.safari.macaw,
			borderTopWidth: 0,
			borderRightWidth: 0,
			borderBottomWidth: 0,
			borderLeftWidth: 0,
			borderTopColor: "transparent",
			borderRightColor: "transparent",
			borderBottomColor: "transparent",
			borderLeftColor: "transparent",
	
		},
	},

	checkbox: {
		selectedColor: colors.safari.macaw,
		borderColor: colors.safari.swan,
		borderWidth: 1,
		borderRadius: 10,
		backgroundColor: colors.safari.swan,
		size: setResponsiveSize(36),
		labelColor: colors.safari.eel,
		color: colors.safari.snow,
		errorBorder: colors.safari.fireAnt,
	},

	countdown: {
		remaningTime: colors.safari.macaw,
		passedTime: colors.safari.siberianHusky,
		radius: 50,
		strokeWidth: 10,
		fontSize: setFontScale(24),
		color: colors.safari.eel,
	
	},

	container: {
		backgroundColor: colors.safari.snow,
		topPadding: 0,
		rightPadding: 0,
		bottomPadding: 0,
		leftPadding: 0,
	},

	group: {
		backgroundColor: "transparent",
		paddingTop: 0,
		paddingRight: setPorcentageWidth(5),
		paddingBottom: 0,
		paddingLeft: setPorcentageWidth(5),
	},

	headerMenu: {
		backgroundColor: colors.safari.snow,
		color: colors.safari.blackPanther,
		fontSize: setFontScale(18) * 1.5,
		borderBottomColor: colors.safari.siberianHusky,
		paddingTop: Constants.statusBarHeight,
		paddingBottom: Constants.statusBarHeight / 2,
		marginBottom: setPorcentageHeight(1),
	},

	input: {
		color: colors.safari.eel,
		iconColor: colors.safari.eel,
		iconBackground: colors.safari.swan,
		iconSize: setFontScale(14),
		labelColor: colors.safari.greyWolf,
		labelSize: setFontScale(14),
		size: setFontScale(20),
		backgroundColor: colors.safari.swan,
		borderColor: colors.safari.swan,
		backgroundColorFocus: colors.safari.swan,
		borderColorFocus: colors.safari.macaw,
		borderRadius: 10,
		errorBorder: colors.safari.fireAnt,
	},
	inputSpinner: {
		button: {
			height: setPorcentageHeight(4),
			borderRadius: 10,
			width: setPorcentageWidth(8),
			text: {
				fontSize: setPorcentageHeight(2),
				height: setPorcentageHeight(4),
				width: setPorcentageWidth(5),
				paddingTop: setPorcentageHeight(0.8),
			},
			value: {
				width: setPorcentageWidth(10),
				height: setPorcentageHeight(4),
				paddingTop: setPorcentageHeight(0.8),
			}
		},
		buttonBackgroundColor: colors.safari.macaw,
		buttonTextColor: colors.safari.polar,
		color: colors.safari.eel,
	},
	select: {
		borderRadius: 10,
		backgroundColor: colors.safari.swan,
		borderColor: colors.safari.swan,
		height: setPorcentageHeight(8),
		container: {
			height: setPorcentageHeight(10),
			marginBottom: setPorcentageHeight(2),
		},
		label:{
			color: colors.safari.greyWolf,
			opacity: 0.8,
			fontSize: setFontScale(14),
			paddingLeft: 10,

		},
		icon: {
				marginRight: setPorcentageWidth(2),
		},
		caret: {
			right: setPorcentageWidth(2),
			top: setPorcentageHeight(2.5),
		},
		item: {
			color: colors.safari.blackPanther,
			marginBottom: setPorcentageHeight(5),
		},
		value: {
			color: colors.safari.eel,
			fontSize: setFontScale(16),
		}
	},
		statusbar: {
			barStyle:"light-content",
			backgroundColor:colors.safari.macaw,
			hidden:false,
	},

	switch: {
		trackColorTrue: colors.safari.macaw,
		trackColorFalse: colors.safari.polar,
		thumbColor: colors.safari.eel,
		fontSize:  setFontScale(14),
    marginBottom: setPorcentageHeight(1),
	},

	text: {
		fontSize: setFontScale(16),
		color: colors.safari.blackPanther,
		inverseColor: colors.safari.snow,
		fontWeight: 400,
		lineHeight: "110%",
	},
};
