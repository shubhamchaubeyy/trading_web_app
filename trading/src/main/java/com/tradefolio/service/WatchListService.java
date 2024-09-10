package com.tradefolio.service;

import com.tradefolio.model.Coin;
import com.tradefolio.model.User;
import com.tradefolio.model.WatchList;

public interface WatchListService {

	
		WatchList findUserWatchlist (Long userId) throws Exception;
		WatchList createWatchlist (User user); 

		WatchList findById(Long id) throws Exception;

		Coin addItemToWatchlist (Coin coin, User user) throws Exception; 

		
}
