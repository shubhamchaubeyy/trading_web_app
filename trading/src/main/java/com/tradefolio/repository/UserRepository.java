package com.tradefolio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tradefolio.model.User;

public interface UserRepository extends JpaRepository<User, Long>{

	User findByEmail(String email);

}
