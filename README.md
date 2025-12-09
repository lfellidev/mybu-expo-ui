# mybu-expo-ui

A comprehensive React Native UI component library built for Expo, providing ready-to-use components, utility functions, constants, and sound assets for mobile app development.

## Installation

```bash
npx expo install mybu-expo-ui
```

## Components

| Component | Description |
|-----------|-------------|
| `Alert` | Display alert messages |
| `BottomSheet` | Bottom sheet modal component |
| `Button` | Customizable button component |
| `Checkbox` | Checkbox input component |
| `Container` | Layout container component |
| `Countdown` | Countdown timer component |
| `Feature` | Feature display component |
| `Group` | Group layout component |
| `HeaderMenu` | Header navigation menu |
| `Icon` | Icon component |
| `InputSpinner` | Numeric input with spinner controls |
| `ListItem` | List item component |
| `Lottie` | Lottie animation component |
| `PricingCard` | Pricing card display |
| `Select` | Select/dropdown component |
| `Skeleton` | Loading skeleton placeholder |
| `Switch` | Toggle switch component |
| `Text` | Styled text component |
| `TextArea` | Multi-line text input |
| `TextInput` | Single-line text input |
| `Update` | App update component |
| `ThemeProvider` | Theme context provider |

## Controllers (Functions)

### Utility Functions

| Function | Description |
|----------|-------------|
| `capitalize` | Capitalize first letter of a string |
| `formatTime` | Format time values |
| `generateID` | Generate unique IDs |
| `reload` | Reload the application |
| `setFontScale` | Set font scale |
| `setLowerCase` | Convert string to lowercase |
| `setPorcentageHeight` | Set percentage-based height |
| `setPorcentageWidth` | Set percentage-based width |
| `setResponsiveSize` | Set responsive sizes |
| `shuffle` | Shuffle array elements |
| `shuffleInt` | Shuffle integer values |
| `sortArray` | Sort array elements |
| `strToBoolean` | Convert string to boolean |
| `useIsEmulator` | Hook to detect emulator |
| `goToStore` | Navigate to app store |

### Remote Functions

| Function | Description |
|----------|-------------|
| `login` | User authentication |
| `signup` | User registration |
| `getRemoteConfig` | Fetch remote configuration |
| `requestNewCode` | Request verification code |
| `verifyCode` | Verify authentication code |
| `verifyToken` | Verify authentication token |
| `verifyCoupon` | Verify coupon code |
| `getSupport` | Get support information |
| `resetPassword` | Reset user password |
| `resetPasswordVerify` | Verify password reset |
| `updateEmail` | Update user email |
| `updateEmailVerify` | Verify email update |
| `updatePassword` | Update user password |
| `updateProfile` | Update user profile |
| `deleteAccount` | Delete user account |

### Custom Storage Functions

| Function | Description |
|----------|-------------|
| `setValue` | Store a value |
| `getValue` | Retrieve a value |
| `deleteValue` | Delete a stored value |

### External Exports

| Export | Description |
|--------|-------------|
| `activateKeepAwakeAsync` | Keep device screen awake |
| `deactivateKeepAwake` | Deactivate keep awake |
| `Battery` | Battery information module |

## Vars (Constants)

| Constant | Description |
|----------|-------------|
| `colors` | Color palette |
| `applicationData` | Application information |
| `constantsData` | App constants |
| `deviceData` | Device information |
| `appStoreData` | App store information |
| `statusbarHeight` | Status bar height |
| `deviceLanguage` | Device language |

## Sounds

| Sound | File |
|-------|------|
| `beepSound` | Beep notification sound |
| `clickSound` | Click interaction sound |
| `purchased` | Purchase confirmation sound |
| `sentSound` | Message sent sound |
| `tintinSound` | Tintin notification sound |
| `unlockSound` | Unlock action sound |

## Usage

```tsx
import { 
  Button, 
  Text, 
  ThemeProvider, 
  useTheme,
  colors,
  capitalize 
} from 'mybu-expo-ui';

export default function App() {
  return (
    <ThemeProvider>
      <Button title="Press me" />
      <Text>{capitalize('hello world')}</Text>
    </ThemeProvider>
  );
}
```

## License

Private
