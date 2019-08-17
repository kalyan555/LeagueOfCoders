package com.dbs.bank.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.dbs.bank.model.Customer;

public interface CustomerService {

	List<Customer> listAll();

	Customer saveCustomer(Customer customer);

	Customer findById(long id);

	ResponseEntity<Customer> updateCustomer(long id, Customer customerDetails);

	ResponseEntity<?> deleteCustomer(long id);
	
	Customer findByPanId(String panId);
	
	public Customer findByEmail(String email);
	
	public Customer findByPhoneNum(String phoneNum);

}
