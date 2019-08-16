package com.dbs.bank.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dbs.bank.model.Account;
@Repository
public interface AccountRepository extends JpaRepository<Account, Long>{

}
