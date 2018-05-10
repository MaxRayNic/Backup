package com.stackroute.database.dao;

import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.stereotype.Component;

import com.stackroute.database.model.Circle;

@Component
public class JdbcDaoImpl {

	public Circle getCircle(int circleId) {

		java.sql.Connection con = null;
		Circle circle = null;
		try {
			Class.forName("com.mysql.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/DB1", "root", "mysql123");

			PreparedStatement ps = con.prepareStatement("select * from circle ");

			ResultSet rs = ps.executeQuery();

			if (rs.next()) {

				circle = new Circle(rs.getInt(1), rs.getString("name"));
			}
			rs.close();
			rs.close();

			return circle;

		}

		catch (Exception e) {
			System.out.println(e);
		}

		finally {
			try {
				con.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return circle;

	}

}
