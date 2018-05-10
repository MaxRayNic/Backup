package com.mycompany.app;

/**
 * Hello world!
 *
 */
public class App {
	public static void main(String[] args) {

		Person P1 = new Person();
		P1.setfName("Max");
		P1.setlName("Ray");
		System.out.println(P1.generateFullName());

	}
}
