package com.stackroute.database;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

class MysqlCon {

	public static void main(String args[]) {
		try {
			Class.forName("com.mysql.jdbc.Driver");
			Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/DB1", "root", "mysql123");

			Statement stmt = con.createStatement();
			ResultSet rs = stmt.executeQuery("select Count(*) from circle");
			while (rs.next())
				System.out.println(rs.getInt(1) + "  ");
			con.close();
		} catch (Exception e) {
			System.out.println(e);
		}
	}
}