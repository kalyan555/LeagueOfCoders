package com.leagueOfCoders.bank.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


import com.leagueOfCoders.bank.models.Account;
import com.leagueOfCoders.bank.models.CustomerDetails;
import com.leagueOfCoders.bank.repository.AccountRepository;

@Service
public class AccountServiceImpl implements AccountService{
	
	@Autowired
	private AccountRepository accountRepository;
	
    @Autowired
	public AccountServiceImpl(AccountRepository accountRepository) {
		super();
		this.accountRepository = accountRepository;
	}

	@Override
	public Optional<List<Account>> findByCustomer(CustomerDetails id) {
		// TODO Auto-generated method stub
		return this.accountRepository.findByCustomer(id);
	}

	@Override
	public List<Account> listAll() {
		// TODO Auto-generated method stub
		return accountRepository.findAll();
	}

	@Override
	public Account saveAccount(Account account) {
		// TODO Auto-generated method stub
		return accountRepository.save(account);
	}

	@Override
	public Account findById(long id) {
		// TODO Auto-generated method stub
		return accountRepository.findById(id).get();
	}

	@Override
	public Account updateAccount(Account accountDetails) {
		// TODO Auto-generated method stub
		Account account = accountRepository.findById(accountDetails.getAccountNum()).get();
		account.setAccountType(accountDetails.getAccountType());
		account.setBranch(accountDetails.getBranch());
		account.setActivated(accountDetails.isActivated());
		return accountRepository.save(account);
	}

	@Override
	public ResponseEntity<?> deleteAccount(long id) {
		// TODO Auto-generated method stub
		Account account = accountRepository.findById(id).get();
		accountRepository.delete(account);
		return ResponseEntity.ok().build();
	}

}
