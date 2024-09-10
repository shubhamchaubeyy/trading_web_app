package com.tradefolio.service;

import com.tradefolio.domain.VerificationType;
import com.tradefolio.model.User;
import com.tradefolio.model.VerificationCode;

public interface VerificationCodeService {

	VerificationCode sendVerificationCode(User user ,VerificationType verificationType);
	VerificationCode getVerificationCodeById(Long id) throws Exception;
	VerificationCode getVerificationCodeByUser(Long userId);
	
	void deleteVerificationCodeById(VerificationCode verificationCode);
}
