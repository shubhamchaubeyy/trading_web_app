package com.tradefolio.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Asset {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private double quantity;
	private double buyPrrice;
	
	@ManyToOne
	private Coin coin;
	
	@ManyToOne
	private User user;

	public Asset() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public double getQuantity() {
		return quantity;
	}

	public void setQuantity(double quantity) {
		this.quantity = quantity;
	}

	public double getBuyPrrice() {
		return buyPrrice;
	}

	public void setBuyPrrice(double buyPrrice) {
		this.buyPrrice = buyPrrice;
	}

	public Coin getCoin() {
		return coin;
	}

	public void setCoin(Coin coin) {
		this.coin = coin;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
	
}
