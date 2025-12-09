import axios from 'axios';
import {appID, appToken, verifyCouponAPI } from '../../constants';

export async function verifyCoupon(emailInput: string, couponCodeInput:string) {
	try {
		const data = await axios.post(verifyCouponAPI, {
				email: emailInput,
				code: couponCodeInput
			},{
				headers: {
					id: appID,
					token: appToken,
				},
			}
		);	
		return data.data;

	} catch (error: any) {	
		return {
			status: 400,
			message: error.message,
			code: "coupon_invalid", 
		}
	}
}