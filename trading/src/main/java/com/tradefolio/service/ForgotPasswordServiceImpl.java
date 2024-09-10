package com.tradefolio.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tradefolio.domain.VerificationType;
import com.tradefolio.model.ForgotPasswordToken;
import com.tradefolio.model.User;
import com.tradefolio.repository.ForgotPasswordRepository;

@Service
public class ForgotPasswordServiceImpl implements ForgotPasswordService{

	@Autowired
	private ForgotPasswordRepository forgotPasswordRepository;

	@Override
	public ForgotPasswordToken createToken(User user, String id, String otp, VerificationType verificationType,
			String sendTo) {

		ForgotPasswordToken token = new ForgotPasswordToken();
		token.setUser(user);;
		token.setSendTo(sendTo);
		token.setVerificationType(verificationType);
		token.setOtp(otp);
		token.setId(id);
		return forgotPasswordRepository.save(token);
	}

	@Override
	public ForgotPasswordToken findById(String id) {
		// TODO Auto-generated method stub
		Optional<ForgotPasswordToken> token= forgotPasswordRepository.findById(id);
		return token.orElse(null);
	}

	@Override
	public ForgotPasswordToken findByUser(Long userId) {
		// TODO Auto-generated method stub
		
		return forgotPasswordRepository.findByUserId(userId);
	}

	@Override
	public void deleteToken(ForgotPasswordToken token) {
		// TODO Auto-generated method stub
		forgotPasswordRepository.delete(token);
	}
	
	
}
