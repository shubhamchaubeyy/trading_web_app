package com.tradefolio.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tradefolio.domain.OrderType;
import com.tradefolio.model.Coin;
import com.tradefolio.model.Order;
import com.tradefolio.model.User;
import com.tradefolio.request.CreateOrderRequest;
import com.tradefolio.service.CoinService;
import com.tradefolio.service.OrderService;
import com.tradefolio.service.UserService;

@RestController
@RequestMapping("/api/orders")
public class OrderController {
	
	@Autowired
	private OrderService orderService;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private CoinService coinService;
	
//	@Autowired
//	private WalletTransactionService walletTransactionService;
	
	@PostMapping("/pay")
	public ResponseEntity<Order> payOrderPayment(
			@RequestHeader("Authorization") String jwt,
			@RequestBody CreateOrderRequest req
			) throws Exception{
		
		User user =userService.findUserProfileByJwt(jwt);
		Coin  coin= coinService.findById(req.getCoinId());
		
		Order order = orderService.processOrder(coin, req.getQuantity(), req.getOrderType(), user) ;
		return ResponseEntity.ok(order);
	}

	@GetMapping("/{orderId}")
	public ResponseEntity<Order> getOrderById(
			@RequestHeader("Authorization") String jwt,
			@PathVariable Long orderId) throws Exception{
		
		User user = userService.findUserProfileByJwt(jwt);
		Order order = orderService.getOrderById(orderId);
		
		if(order.getUser().getId().equals(user.getId())) {
			return ResponseEntity.ok(order);
		}
		
		throw new Exception("access denied");
	}
	
	@GetMapping("")
	public ResponseEntity<List<Order>> getAllOrdersForUser(
			@RequestHeader("Authorization") String jwt,
			@RequestParam(required = false) OrderType order_type,
			@RequestParam(required = false) String asset_symbol) throws Exception{
		
		Long userId= userService.findUserProfileByJwt(jwt).getId();
		
		List<Order> userOrders= orderService.getAllOrderOfUser(userId, order_type, asset_symbol);
		return new ResponseEntity<List<Order>>(userOrders,HttpStatus.OK);
	}
}
