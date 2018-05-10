package com.stackroute.database;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.stackroute.database.dao.JdbcDaoImpl;
import com.stackroute.database.model.Circle;

public class JdbcDemo {

	private static ApplicationContext ctx;

	public static void main(String args[]) {
		ctx = new ClassPathXmlApplicationContext("Application-context.xml");
		JdbcDaoImpl dao = (JdbcDaoImpl) ctx.getBean("jdbcDaoImpl");
		Circle circle = dao.getCircle(0);
		System.out.println(circle.getId() + "|" + circle.getName());
	}

}
