package com.dbs.bank.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table
public class Transaction {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long tid;
	
	private long amount;
    private long fromAccountNum;
    private long toAccountNum;
    
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
	@JoinColumn(name="accountNum", nullable = false)
    private Account account;
    
    
	public long getTid() {
		return tid;
	}
	public void setTid(long tid) {
		this.tid = tid;
	}
	public long getAmount() {
		return amount;
	}
	public void setAmount(long amount) {
		this.amount = amount;
	}
	public long getFromAccountNum() {
		return fromAccountNum;
	}
	public void setFromAccountNum(long fromAccountNum) {
		this.fromAccountNum = fromAccountNum;
	}
	public long getToAccountNum() {
		return toAccountNum;
	}
	public void setToAccountNum(long toAccountNum) {
		this.toAccountNum = toAccountNum;
	}
	public Account getAccount() {
		return account;
	}
	public void setAccount(Account account) {
		this.account = account;
	} 
	public Transaction() {

	}
	public Transaction(long tid, long amount, long fromAccountNum, long toAccountNum, Account account) {
		super();
		this.tid = tid;
		this.amount = amount;
		this.fromAccountNum = fromAccountNum;
		this.toAccountNum = toAccountNum;
		this.account = account;
	}


}