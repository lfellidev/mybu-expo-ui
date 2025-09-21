import { defaultTheme } from './defaultTheme';

export type ThemeProviderTypes = {
	theme?: typeof defaultTheme;
	children?: React.ReactNode;
}