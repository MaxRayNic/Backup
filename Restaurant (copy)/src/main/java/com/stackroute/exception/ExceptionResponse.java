package com.stackroute.exception;

import java.util.Date;

public class ExceptionResponse {
  private Date timestamp;
  private String message;
  private String details;
  
  public ExceptionResponse() {

	  }

  public ExceptionResponse( String message, String details) {
    super();
  
    this.message = message;
    this.details = details;
  }



public void setMessage(String message) {
	this.message = message;
}

public void setDetails(String details) {
	this.details = details;
}



  public String getMessage() {
    return message;
  }

  public String getDetails() {
    return details;
  }

}