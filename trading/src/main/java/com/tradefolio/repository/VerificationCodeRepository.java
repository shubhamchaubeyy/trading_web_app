package com.tradefolio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tradefolio.model.VerificationCode;

public interface VerificationCodeRepository extends JpaRepository<VerificationCode, Long>{

	public VerificationCode findByUserId(Long userId);
}
