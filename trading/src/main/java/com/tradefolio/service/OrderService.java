package com.tradefolio.service;

import java.util.List;

import com.tradefolio.domain.OrderType;
import com.tradefolio.model.Coin;
import com.tradefolio.model.Order;
import com.tradefolio.model.OrderItem;
import com.tradefolio.model.User;

public interface OrderService {

	Order createOrder (User user ,OrderItem orderItem ,OrderType orderType);
	
	Order getOrderById(Long orderId) throws Exception;
	
	List<Order> getAllOrderOfUser(Long userId ,OrderType orderType ,String assetSymbol);
	
	Order processOrder(Coin coin , double quantity ,OrderType orderType ,User user) throws Exception;
}
