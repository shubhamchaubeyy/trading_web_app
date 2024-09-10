package com.tradefolio.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tradefolio.domain.VerificationType;
import com.tradefolio.model.User;
import com.tradefolio.model.VerificationCode;
import com.tradefolio.repository.VerificationCodeRepository;
import com.tradefolio.utils.OtpUtils;

@Service
public class VerificationCodeServiceImpl implements VerificationCodeService{

	@Autowired
	private VerificationCodeRepository verificationCodeRepository;
	

	@Override
	public VerificationCode getVerificationCodeById(Long id) throws Exception {
		
		Optional<VerificationCode> verificationCode = verificationCodeRepository.findById(id);
		
		if(verificationCode.isEmpty()) {
			throw new Exception("verification code not found");
		}
		return verificationCode.get();
	}

	@Override
	public VerificationCode getVerificationCodeByUser(Long userId) {
		
		return verificationCodeRepository.findByUserId(userId);
	}

	@Override
	public void deleteVerificationCodeById(VerificationCode verificationCode) {
		verificationCodeRepository.delete(verificationCode);
	}

	@Override
	public VerificationCode sendVerificationCode(User user, VerificationType verificationType) {
		// TODO Auto-generated method stub
		
		VerificationCode verificationCode= new VerificationCode();
		
		verificationCode.setOtp(OtpUtils.generateOtp());
		verificationCode.setVerificationType(verificationType);
		verificationCode.setUser(user);
		return verificationCodeRepository.save(verificationCode);
	}
	
	
}
