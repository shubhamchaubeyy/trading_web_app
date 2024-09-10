package com.tradefolio.service;

import java.util.List;

import com.tradefolio.model.User;
import com.tradefolio.model.Withdrawal;

public interface WithdrawalService {

	Withdrawal requestWithdrawal(Long amount,User user);
	
	Withdrawal proceedWithdrawal(Long withdrawalId, boolean accept) throws Exception;
	
	List<Withdrawal> getUsersWithdrawalHistory(User user);
	
	List<Withdrawal> getAllWithdrawalRequest();
}
