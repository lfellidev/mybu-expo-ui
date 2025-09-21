

export const remoteConfigAPI: string=`${process.env.EXPO_PUBLIC_API_DOMAIN}/remoteConfig`;
export const supportAPI: string=`${process.env.EXPO_PUBLIC_API_DOMAIN}/support`;
export const signupAPI: string=`${process.env.EXPO_PUBLIC_API_DOMAIN}/signup`;
export const forgotAPI:string=`${process.env.EXPO_PUBLIC_API_DOMAIN}/forgot`;
export const forgotAPIVerify:string=`${process.env.EXPO_PUBLIC_API_DOMAIN}/forgot/verify`
export const signupVerifyAPI: string=`${process.env.EXPO_PUBLIC_API_DOMAIN}/signup/verify`;
export const resendVerifyAPI: string=`${process.env.EXPO_PUBLIC_API_DOMAIN}/resendVerify`	;
export const loginAPI: string=`${process.env.EXPO_PUBLIC_API_DOMAIN}/login`;
export const updateAPI: string=`${process.env.EXPO_PUBLIC_API_DOMAIN}/update`;
export const updateEmailAPI: string=`${process.env.EXPO_PUBLIC_API_DOMAIN}/update/email`;
export const updateEmailVerifyAPI: string=`${process.env.EXPO_PUBLIC_API_DOMAIN}/update/email/verify`;
export const updatePasswordAPI: string=`${process.env.EXPO_PUBLIC_API_DOMAIN}/update/password`;
export const verifyTokenAPI: string=`${process.env.EXPO_PUBLIC_API_DOMAIN}/verifyToken`;
export const deleteAPI: string=`${process.env.EXPO_PUBLIC_API_DOMAIN}/delete`;
export const customGetAPI: string=`${process.env.EXPO_PUBLIC_API_DOMAIN}/custom/get`;
export const customSetAPI: string=`${process.env.EXPO_PUBLIC_API_DOMAIN}/custom/set`;
export const customDeleteAPI: string=`${process.env.EXPO_PUBLIC_API_DOMAIN}/custom/delete`; 

export const appleRevenueCat: string | undefined = process.env.EXPO_PUBLIC_REVENUECAT_APPLE;
export const googleRevenueCat: string | undefined = process.env.EXPO_PUBLIC_REVENUECAT_GOOGLE;


export const appID : string | undefined = process.env.EXPO_PUBLIC_APP_ID;
export const appToken: string | undefined = process.env.EXPO_PUBLIC_APP_TOKEN;
export const emailValidation: RegExp = /\S+@\S+\.\S+/;


