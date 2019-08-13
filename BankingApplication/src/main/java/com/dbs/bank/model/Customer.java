package com.dbs.bank.model;



import java.io.Serializable;
import java.util.*;

import javax.persistence.*;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;

@Data
@Entity
@Table
//@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties(value = {"createdAt", "updatedAt"}, 
        allowGetters = true)
public class Customer implements Serializable{
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long cust_id;
	
	private String username;
	private String password;
	private String firstname;
	private String lastname;
	private String email;
	private String phoneNum;
	private String panId;

	@OneToMany(mappedBy = "customer", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private Set<Account> accounts = new HashSet<>();

	public Customer(String username, String password) {
		this.username = username;
		this.password = password;
	}
	
	public Customer(long cust_id, String username, String panId) {
		this.cust_id = cust_id;
		this.username = username;
		this.panId = panId;
	}
	
	public Customer(long cust_id, String username, String password, String firstname, String lastname, String email,
			String phoneNum, String panId) {
		this.cust_id = cust_id;
		this.username = username;
		this.password = password;
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.phoneNum = phoneNum;
		this.panId = panId;
		
	}

	

	

	@Override
	public String toString() {
		return "CustomerDetails [cust_id=" + cust_id + ", username=" + username + ", password=" + password + ", firstname="
				+ firstname + ", lastname=" + lastname + ", email=" + email + ", phoneNum=" + phoneNum + ", panId=" + panId
				+ "]";
	}
}
