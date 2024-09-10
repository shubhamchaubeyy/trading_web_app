package com.tradefolio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tradefolio.model.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long>{

}
