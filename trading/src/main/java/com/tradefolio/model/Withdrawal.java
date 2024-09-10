package com.tradefolio.model;

import java.time.LocalDateTime;


import com.tradefolio.domain.WithdrawalStatus;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Withdrawal {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private WithdrawalStatus status;
	
	private Long amount;
	
	
	@ManyToOne
	private User user;
	
	private LocalDateTime date = LocalDateTime.now();

	public Withdrawal() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public WithdrawalStatus getStatus() {
		return status;
	}

	public void setStatus(WithdrawalStatus status) {
		this.status = status;
	}

	public Long getAmount() {
		return amount;
	}

	public void setAmount(Long amount) {
		this.amount = amount;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public LocalDateTime getDate() {
		return date;
	}

	public void setDate(LocalDateTime date) {
		this.date = date;
	}
	
	
}
