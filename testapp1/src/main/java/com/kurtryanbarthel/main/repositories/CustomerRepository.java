package com.kurtryanbarthel.main.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kurtryanbarthel.main.model.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {

}
