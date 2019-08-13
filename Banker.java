package com.dbs.model;

public class Banker {
private long id=1234;
private String password="dbs@1234";
public long getId() {
	return id;
}
public String getPassword() {
	return password;
}
@Override
public String toString() {
	return "Banker [id=" + id + ", password=" + password + "]";
}
public Banker(long id, String password) {
	super();
	this.id = id;
	this.password = password;
}

}
