package com.stackroute.spring.controller;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.stackroute.spring.entitites.User;
import com.stackroute.spring.service.UserService;

@Controller
public class UserController {
	@RequestMapping(value = "/userEntryPage")
	public String register(User user) {

		return "user/user";

	}

	@RequestMapping(value = "/userEntryProcess", method = RequestMethod.POST)
	public String getUser(@Valid User user, BindingResult bindingResult) {
		if (bindingResult.hasErrors()) {
			System.out.println("hasError");
			return "user/user";
		}
		System.out.println(bindingResult.hasErrors());
		UserService.addUser(user);
		return "user/userEntrySuccess";
	}

	@RequestMapping(value = "/showUserData", method = RequestMethod.GET)
	public String getUserData(Model model) {
		model.addAttribute(UserService.getUserList());
		return "user/userData";

	}

}