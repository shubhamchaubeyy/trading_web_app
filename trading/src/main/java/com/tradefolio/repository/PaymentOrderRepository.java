package com.tradefolio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tradefolio.model.PaymentOrder;

public interface PaymentOrderRepository extends JpaRepository<PaymentOrder, Long>{

}
