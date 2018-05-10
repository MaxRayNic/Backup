package com.stackroute.spring.service;

import java.util.ArrayList;
import java.util.List;

import com.stackroute.spring.entitites.User;

public class UserService {
	private static List<User> userList = new ArrayList<User>();

	public static void addUser(User user) {
		userList.add(user);
	}

	public static List<User> getUserList() {
		System.out.println(userList);
		return userList;

	}

}
