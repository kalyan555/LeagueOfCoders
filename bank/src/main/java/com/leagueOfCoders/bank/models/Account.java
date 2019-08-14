package com.leagueOfCoders.bank.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table
public class Account {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long accountNum;
	private String accountType;
	
	@ManyToOne
	@JoinColumn(name="cust_id", nullable = false)
	private CustomerDetails customer;
	
	@ManyToOne
	@JoinColumn(name="branchIFSC",nullable= false)
	private Branch branch;
	
	
	public Account(long accountNum, String accountType, CustomerDetails customer) {
		super();
		this.accountNum = accountNum;
		this.accountType = accountType;
		this.customer = customer;
	}
	
	public Account(long accountNum, String accountType, CustomerDetails customer, Branch branch) {
		this.accountNum = accountNum;
		this.accountType = accountType;
		this.customer = customer;
		this.branch = branch;
	}
	
	public long getAccountNum() {
		return accountNum;
	}
	public void setAccountNum(long accountNum) {
		this.accountNum = accountNum;
	}
	public String getAccountType() {
		return accountType;
	}
	public void setAccountType(String accountType) {
		this.accountType = accountType;
	}
	public CustomerDetails getCustomer() {
		return customer;
	}
	public void setCustomer(CustomerDetails customer) {
		this.customer = customer;
	}

	public Branch getBranch() {
		return branch;
	}

	public void setBranch(Branch branch) {
		this.branch = branch;
	}

}