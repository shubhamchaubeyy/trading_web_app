package com.tradefolio.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tradefolio.model.PaymentDetail;
import com.tradefolio.model.User;
import com.tradefolio.service.PaymentDetailService;
import com.tradefolio.service.UserService;

@RestController

@RequestMapping("/api")

public class PaymentDetailsController {

	@Autowired
	private UserService userService;

	@Autowired
	private PaymentDetailService paymentDetailsService;

	@PostMapping("/payment-details")
	public ResponseEntity<PaymentDetail> addPaymentDetails(@RequestBody PaymentDetail paymentDetailsRequest,
			@RequestHeader("Authorization") String jwt) throws Exception {

		User user = userService.findUserProfileByJwt(jwt);
		PaymentDetail paymentDetails = paymentDetailsService.addPaymentDetails(

				paymentDetailsRequest.getAccountNumber(),

				paymentDetailsRequest.getAccountHolderName(),

				paymentDetailsRequest.getIfsc(),

				paymentDetailsRequest.getBankName(),

				user);

		return new ResponseEntity<>(paymentDetails, HttpStatus.CREATED);
	}

	@GetMapping("/payment-details")
	public ResponseEntity<PaymentDetail> getUsersPaymentDetails(@RequestHeader("Authorization") String jwt)
			throws Exception {

		User user = userService.findUserProfileByJwt(jwt);

		PaymentDetail paymentDetails = paymentDetailsService.getUsersPaymentDetails(user);

		return new ResponseEntity<>(paymentDetails, HttpStatus.CREATED);

	}
}