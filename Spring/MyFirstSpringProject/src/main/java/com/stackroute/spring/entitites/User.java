package com.stackroute.spring.entitites;

import org.hibernate.validator.constraints.NotEmpty;

public class User {
	@NotEmpty
	private String name;

	private String mail;
	private String message;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getMail() {
		return mail;
	}

	public void setMail(String mail) {
		this.mail = mail;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return "User [name=" + name + ", mail=" + mail + ", message=" + message + "]";
	}

}
