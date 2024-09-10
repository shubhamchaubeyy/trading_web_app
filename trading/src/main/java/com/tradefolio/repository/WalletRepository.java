package com.tradefolio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tradefolio.model.Wallet;

public interface WalletRepository extends JpaRepository<Wallet, Long>{

	Wallet findByUserId(long userId);
}
