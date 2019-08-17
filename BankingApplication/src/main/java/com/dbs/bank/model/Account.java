package com.dbs.bank.model;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;



import lombok.Data;

//@Data
@Entity
@Table
public class Account implements Serializable{
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long accountNum;
	private String accountType;
	private double balance;
	
	public double getBalance() {
		return balance;
	}
	public void setBalance(double balance) {
		this.balance = balance;
	}

	@ManyToOne(fetch = FetchType.EAGER,cascade = CascadeType.PERSIST)
	@JoinColumn(name="cust_id", nullable = false)
	//@JsonBackReference
	private Customer customer;
	
	@ManyToOne
	@JoinColumn(name="branchIFSC",nullable= false)
	private Branch branch;
	
	@OneToMany(mappedBy = "account", cascade = CascadeType.PERSIST, fetch = FetchType.LAZY)
	private Set<Transaction> Transactions = new HashSet<>();
	
	
	
	
	public String getAccountType() {
		return accountType;
	}
	public void setAccountType(String accountType) {
		this.accountType = accountType;
	}
	public Customer getCustomer() {
		return customer;
	}
	public void setCustomer(Customer customer) {
		this.customer = customer;
	}
	public Branch getBranch() {
		return branch;
	}
	public void setBranch(Branch branch) {
		this.branch = branch;
	}
	
	
	
    public Account() {}
	public Account(long accountNum, String accountType, Customer customer) {
		super();
		this.accountNum = accountNum;
		this.accountType = accountType;
		this.customer = customer;
	}
	public Account(long accountNum, String accountType, Customer customer, Branch branch) {
		super();
		this.accountNum = accountNum;
		this.accountType = accountType;
		this.customer = customer;
		this.branch = branch;
	}
    
	
	
}
