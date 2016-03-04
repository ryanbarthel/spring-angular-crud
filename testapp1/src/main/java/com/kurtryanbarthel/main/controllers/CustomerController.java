package com.kurtryanbarthel.main.controllers;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.kurtryanbarthel.main.model.Address;
import com.kurtryanbarthel.main.model.Customer;
import com.kurtryanbarthel.main.repositories.AddressRepository;
import com.kurtryanbarthel.main.repositories.CustomerRepository;

@RestController
@RequestMapping("/api/customers")
public class CustomerController {
	private static final Logger LOGGER = Logger.getLogger(CustomerController.class);
	@Autowired
	private AddressRepository addressRepository;
	@Autowired
	private CustomerRepository customerRepository;
	
	@RequestMapping(method = RequestMethod.GET)
	public List<Customer> findCustomers() {
		List<Customer> customers = customerRepository.findAll();
		LOGGER.warn(customers);
		return customers;
	}
	
	@RequestMapping(method = RequestMethod.POST) 
	public Customer addCustomer(@RequestBody Customer customer) {
		LOGGER.info(customer);
		customer.setId(null);
		Address address = null;
		if (customer.getAddress() != null) {
			address = addressRepository.findByStreetAndZip(customer.getAddress().getStreet(), customer.getAddress().getZip());
		}
		if (address != null) {
			customer.setAddress(address);
		}
		return customerRepository.saveAndFlush(customer);
	}
	
	@RequestMapping(value = "/{id}",method = RequestMethod.PUT)
	public Customer editCustomer(@RequestBody Customer customer, @PathVariable Integer id) {
		customer.setId(id);
		return customerRepository.saveAndFlush(customer);
	}
	
	@RequestMapping(value = "/{id}",method = RequestMethod.GET)
	public Customer getCustomer(@PathVariable Integer id) {		
		return customerRepository.findOne(id);
	}
	
	@RequestMapping(value = "/{id}",method = RequestMethod.DELETE)
	public void deleteCustomer(@PathVariable Integer id) {
		customerRepository.delete(id);
	}

}
