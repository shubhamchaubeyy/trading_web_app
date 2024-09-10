package com.tradefolio.service;

import com.tradefolio.model.PaymentDetail;
import com.tradefolio.model.User;

public interface PaymentDetailService {

	public PaymentDetail addPaymentDetails(String accountNumber,
			String accountHolderName,
			String ifsc,
			String bankName,
			User user);
	
	public PaymentDetail getUsersPaymentDetails(User user);
}
