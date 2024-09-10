package com.tradefolio.service;

import com.tradefolio.model.TwoFactorOtp;
import com.tradefolio.model.User;

public interface TwoFactorOtpService {

	
	TwoFactorOtp  createTwoFactorOtp(User user,String otp ,String jwt);
	
	TwoFactorOtp  findByUser(Long userId);
	
	TwoFactorOtp  findById(String id);
	
	boolean verifyTwoFactorOtp(TwoFactorOtp twoFactorOtp ,String otp);
	
	void deleteTwoFactorOtp(TwoFactorOtp twoFactorOtp);
}
