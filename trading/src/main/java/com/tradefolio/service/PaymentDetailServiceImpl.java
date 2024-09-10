package com.tradefolio.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tradefolio.model.PaymentDetail;
import com.tradefolio.model.User;
import com.tradefolio.repository.PaymentDetailsRepository;

@Service
public class PaymentDetailServiceImpl implements PaymentDetailService{

	@Autowired
	private PaymentDetailsRepository paymentDetailsRepository;
	@Override
	public PaymentDetail addPaymentDetails(String accountNumber, String accountHolderName, String ifsc, String bankName,
			User user) {
		
		PaymentDetail paymentDetails=new PaymentDetail();

		paymentDetails.setAccountNumber (accountNumber);

		paymentDetails.setAccountHolderName (accountHolderName);

		paymentDetails.setIfsc(ifsc);

		paymentDetails.setBankName(bankName);

		paymentDetails.setUser(user);
		return paymentDetailsRepository.save(paymentDetails);
	}

	@Override
	public PaymentDetail getUsersPaymentDetails(User user) {
		// TODO Auto-generated method stub
		return paymentDetailsRepository.findByUserId(user.getId());
	}

}
