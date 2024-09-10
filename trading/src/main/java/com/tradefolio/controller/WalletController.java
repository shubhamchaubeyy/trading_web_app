package com.tradefolio.controller;

import java.math.BigDecimal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tradefolio.model.Order;
import com.tradefolio.model.PaymentOrder;
import com.tradefolio.model.User;
import com.tradefolio.model.Wallet;
import com.tradefolio.model.WalletTransaction;
import com.tradefolio.service.OrderService;
import com.tradefolio.service.PaymentService;
import com.tradefolio.service.UserService;
import com.tradefolio.service.WalletSerrvice;

@RestController
@RequestMapping("/api/wallet")
public class WalletController {

	
	@Autowired
	private WalletSerrvice walletService;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private OrderService orderService;
	
	@Autowired
	private PaymentService paymentService;
	
	@GetMapping("")
	public ResponseEntity<Wallet> getUserWallet(@RequestHeader("Authorization") String jwt) throws Exception{
		
		User user = userService.findUserProfileByJwt(jwt);
		
		Wallet wallet = walletService.getUserWallet(user);
		
		return new ResponseEntity<Wallet>(wallet,HttpStatus.ACCEPTED);
	}
	
	@PutMapping("/api/wallet/{walletId}/transfer")
	public ResponseEntity<Wallet> walletToWalletTransfer(
			@RequestHeader("Authorization") String jwt,
			@PathVariable Long walletId,
			@RequestBody WalletTransaction req) throws Exception{
		
		User senderUser= userService.findUserProfileByJwt(jwt);
		Wallet receiverWallet = walletService.findWalletById(walletId);
		
		Wallet recieverWallet = walletService.findWalletById(walletId);
		
		Wallet wallet= walletService.walletToWalletTransfer(senderUser, receiverWallet, req.getAmount());
		return new ResponseEntity<Wallet>(wallet,HttpStatus.ACCEPTED);	
	}
	
	@PutMapping("/api/wallet/order/{orderId}/pay")
	public ResponseEntity<Wallet> payOrderPayment(
			@RequestHeader("Authorization") String jwt,
			@PathVariable Long orderId
			) throws Exception{
		
		User user= userService.findUserProfileByJwt(jwt);
		
		Order order= orderService.getOrderById(orderId);
		
		Wallet wallet = walletService.payOrderPayment(order, user);
		
		return new ResponseEntity<Wallet>(wallet,HttpStatus.ACCEPTED);	
	}
	
	@PutMapping("/api/wallet/deposite")
	public ResponseEntity<Wallet> addBalanceToWallet(
			@RequestHeader("Authorization") String jwt,
			@RequestParam(name ="order_id") Long orderId,
			@RequestParam (name="payment_id") String paymentId
			) throws Exception{
		
		User user= userService.findUserProfileByJwt(jwt);
		
		Wallet wallet = walletService.getUserWallet(user);
		
		PaymentOrder order = paymentService.getPaymentOrderById(orderId);
		
		Boolean status =paymentService.proceedPaymentOrder(order, paymentId);
		
		if(wallet.getBalance()==null) {
			wallet.setBalance(BigDecimal.valueOf(0));
		}
		if(status) 
			wallet=walletService.addBalance(wallet, order.getAmount());
		
		return new ResponseEntity<Wallet>(wallet,HttpStatus.ACCEPTED);	
	}
	
	
}
