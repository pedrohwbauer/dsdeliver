package com.pedrohwbauer.dsdeliver.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pedrohwbauer.dsdeliver.entities.Order;


public interface OrderRepository extends JpaRepository<Order, Long> {
	
	
}
