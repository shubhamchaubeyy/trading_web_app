package com.tradefolio.service;

import com.tradefolio.domain.VerificationType;
import com.tradefolio.model.ForgotPasswordToken;
import com.tradefolio.model.User;

public interface ForgotPasswordService {

	ForgotPasswordToken createToken(User user , String id ,String otp , 
			VerificationType verificationType , String sendTo);
	
	ForgotPasswordToken findById(String id);
	
	ForgotPasswordToken findByUser(Long userId);
	
	void deleteToken(ForgotPasswordToken token);
	
}
