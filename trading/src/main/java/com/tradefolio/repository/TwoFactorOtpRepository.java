package com.tradefolio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tradefolio.model.TwoFactorOtp;

public interface TwoFactorOtpRepository extends JpaRepository<TwoFactorOtp, String>{

	TwoFactorOtp findByUserId(Long userId);
}
