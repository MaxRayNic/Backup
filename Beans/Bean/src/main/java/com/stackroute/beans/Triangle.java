package com.stackroute.beans;

public class Triangle {
private Point pointA;
private Point pointB;
private Point pointC;
public Triangle(Point pointA, Point pointB, Point pointC) {
	super();
	this.pointA = pointA;
	this.pointB = pointB;
	this.pointC = pointC;
}
public Point getPointA() {
	return pointA;
}
public Point getPointB() {
	return pointB;
}
public Point getPointC() {
	return pointC;
}


}
