package com.tradefolio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tradefolio.model.WatchList;

public interface WatchListRepository extends JpaRepository<WatchList, Long>{

	WatchList findByUserId(Long userId);
}
