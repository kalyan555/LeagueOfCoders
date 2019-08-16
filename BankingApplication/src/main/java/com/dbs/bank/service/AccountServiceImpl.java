package com.dbs.bank.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.dbs.bank.model.Account;
import com.dbs.bank.model.Customer;
import com.dbs.bank.repository.AccountRepository;
import com.dbs.bank.repository.CustomerRepository;

@Service
public class AccountServiceImpl implements AccountService{
	
	@Autowired
	private AccountRepository accountRepository;
	
	@Autowired
	private CustomerRepository customerRepository;
	
    @Autowired
	public AccountServiceImpl(AccountRepository accountRepository) {
		super();
		this.accountRepository = accountRepository;
	}

	@Override
	public Optional<List<Account>> findByCustomer(Customer id) {
		return this.accountRepository.findByCustomer(id);
	}

	@Override
	public List<Account> listAll() {
		return accountRepository.findAll();
	}

	@Override
	public Account saveAccount(Account account) {
		//Customer customer = customerRepository.findById(id).get();
		//customerRepository.save(customer);
		return accountRepository.save(account);
	}

	@Override
	public Account findById(long id) {
		return accountRepository.findById(id).get();
	}

	@Override
	public ResponseEntity<Account> updateAccount(long id, Account accountDetails) {
		Account account = accountRepository.findById(id).get();
		account.setAccountType(accountDetails.getAccountType());
		account.setBranch(accountDetails.getBranch());
		account.setIfsc(accountDetails.getIfsc());
		return ResponseEntity.ok().body(account);
	}

	@Override
	public ResponseEntity<?> deleteAccount(long id) {
		Account account = accountRepository.findById(id).get();
		accountRepository.delete(account);
		return ResponseEntity.ok().build();
	}

}