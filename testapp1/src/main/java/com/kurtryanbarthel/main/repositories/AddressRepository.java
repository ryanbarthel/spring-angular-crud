package com.kurtryanbarthel.main.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kurtryanbarthel.main.model.Address;

public interface AddressRepository extends JpaRepository<Address, Integer> {
	
	public Address findByStreetAndZip(String street, String zip);
	
}
