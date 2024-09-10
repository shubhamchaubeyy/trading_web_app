package com.tradefolio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tradefolio.model.ForgotPasswordToken;

public interface ForgotPasswordRepository extends JpaRepository<ForgotPasswordToken, String>{

	ForgotPasswordToken findByUserId(Long userID);
}
