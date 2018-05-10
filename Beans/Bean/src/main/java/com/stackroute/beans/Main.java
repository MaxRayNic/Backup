package com.stackroute.beans;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;


class Main{
	private static ApplicationContext context;

	public static void main(String[] args)  {
		context = new ClassPathXmlApplicationContext("ApplicationContext.xml");
	Triangle triangle = (Triangle)context.getBean("createTriangle");
	System.out.println(triangle.getPointA());
	System.out.println(triangle.getPointB());
	System.out.println(triangle.getPointC());
	
	
	}
}