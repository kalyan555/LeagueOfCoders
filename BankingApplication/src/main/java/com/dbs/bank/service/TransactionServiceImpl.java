package com.dbs.bank.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.dbs.bank.model.Account;
import com.dbs.bank.model.Transaction;
import com.dbs.bank.repository.TransactionRepository;

@Service
public class TransactionServiceImpl implements TransactionService{

	@Autowired
	private TransactionRepository transactionRepository;
	
	public TransactionServiceImpl(TransactionRepository transactionRepository) {
		super();
		this.transactionRepository=transactionRepository;
	}
	
	@Override
	public List<Transaction> listAll() {
		return this.transactionRepository.findAll();
	}

	@Override
	public Transaction saveTransaction(Transaction transaction) {
		return this.transactionRepository.save(transaction);
	}



	@Override
	public Optional<List<Transaction>> findByAccount(Account id) {
		return this.transactionRepository.findByAccount(id);
	}
	
	@Override
	public Transaction findById(long id) {
		return this.transactionRepository.findById(id).get();
	}

}