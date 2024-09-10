package com.tradefolio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tradefolio.model.PaymentDetail;

public interface PaymentDetailsRepository extends JpaRepository<PaymentDetail, Long>{

	PaymentDetail findByUserId(Long userId);
}
