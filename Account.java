package com.dbs.model;

import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

public class Account {
private long accountNum;
private String accountType;
@ManyToOne
@JoinColumn(name="cust_id", nullable = false)
private CustomerDetails customer;
private String branch;
private String ifsc;
public Account(long accountNum, String accountType, CustomerDetails customer) {
	super();
	this.accountNum = accountNum;
	this.accountType = accountType;
	this.customer = customer;
}

public Account(long accountNum, String accountType, CustomerDetails customer, String branch, String ifsc) {
	this.accountNum = accountNum;
	this.accountType = accountType;
	this.customer = customer;
	this.branch = branch;
	this.ifsc = ifsc;
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
public String getBranch() {
	return branch;
}
public void setBranch(String branch) {
	branch = this.branch;
}
public String getIfsc() {
	return ifsc;
}
public void setIfsc(String ifsc) {
	this.ifsc = ifsc;
}

}
