package com.tradefolio.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tradefolio.model.Coin;
import com.tradefolio.model.User;
import com.tradefolio.model.WatchList;
import com.tradefolio.service.CoinService;
import com.tradefolio.service.UserService;
import com.tradefolio.service.WatchListService;

@RestController
@RequestMapping("/api/watchlist")
public class WatchListController {

	@Autowired
	private CoinService coinService;
	
	@Autowired
	private  WatchListService watchListService;
	
	@Autowired
	private  UserService userService;
	
	@GetMapping("/user")
	public ResponseEntity<WatchList> getUserWatchlist(
	@RequestHeader("Authorization") String jwt) throws Exception {

	User user =userService.findUserProfileByJwt(jwt);

	WatchList watchlist = watchListService.findUserWatchlist (user.getId());

	return ResponseEntity.ok(watchlist);

	}
	
	@GetMapping("/{watchlistId}")
	public ResponseEntity<WatchList> getWatchlistById(

	@PathVariable Long watchlistId) throws Exception {

	WatchList watchlist = watchListService.findById(watchlistId);

	return ResponseEntity.ok(watchlist);
	}

	@PatchMapping("/add/coin/{coinId}")
	public ResponseEntity<Coin> addItemToWatchlist( @RequestHeader("Authorization") String jwt,

	@PathVariable String coinId) throws Exception {

	User user= userService.findUserProfileByJwt(jwt);

	Coin coin=coinService.findById(coinId);

	Coin addedCoin = watchListService.addItemToWatchlist(coin, user);

	return ResponseEntity.ok(addedCoin);
	}
	
}
