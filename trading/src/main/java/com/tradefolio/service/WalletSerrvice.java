package com.tradefolio.service;

import com.tradefolio.model.Order;
import com.tradefolio.model.User;
import com.tradefolio.model.Wallet;

public interface WalletSerrvice {

	Wallet getUserWallet(User user);
	
	Wallet addBalance(Wallet wallet,Long money);
	
	Wallet findWalletById(Long id) throws Exception;
	
	Wallet walletToWalletTransfer(User sender ,Wallet receiverWallet ,Long amount) throws Exception;
	
	Wallet payOrderPayment(Order order , User user) throws Exception;
}
