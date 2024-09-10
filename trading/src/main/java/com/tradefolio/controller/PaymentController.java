package com.tradefolio.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.razorpay.RazorpayException;
import com.stripe.exception.StripeException;
import com.tradefolio.domain.PaymentMethod;
import com.tradefolio.model.User;
import com.tradefolio.response.PaymentResponse;
import com.tradefolio.service.PaymentService;
import com.tradefolio.service.UserService;

@RestController
@RequestMapping("/api")
public class PaymentController {

	@Autowired
	private UserService userService;
	
	@Autowired
	private PaymentService paymentService;
	
	
	public ResponseEntity<PaymentResponse> paymentHandler(
	@PathVariable PaymentMethod paymentMethod,
	@PathVariable Long amount,
	@RequestHeader ("Authorization") String jwt) throws Exception ,RazorpayException ,StripeException{
		
		User user = userService.findUserProfileByJwt(jwt);
		
		PaymentResponse paymentResponse;
		
		if(paymentMethod.equals(PaymentMethod.RAZORPAY)) {
			paymentResponse= paymentService.createRazorPayPaymentLink(user, amount);
		}
		else {
			paymentResponse = paymentService.createStripePaymentLink(user, amount, amount);
		}
		
		return new ResponseEntity<PaymentResponse>(paymentResponse,HttpStatus.CREATED);
	}
	
	
}
