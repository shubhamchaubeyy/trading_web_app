package com.tradefolio.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tradefolio.model.Withdrawal;

public interface WithdrawalRepository extends JpaRepository<Withdrawal, Long>{

	List<Withdrawal> findByUserId(Long userId);
}
