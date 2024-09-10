package com.tradefolio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tradefolio.model.Coin;

public interface CoinRepository  extends JpaRepository<Coin, String>{

}
