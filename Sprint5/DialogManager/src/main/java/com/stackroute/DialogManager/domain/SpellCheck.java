package com.stackroute.DialogManager.domain;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

@Component
public class SpellCheck {

//	String sessionId ;
//	String type;
//	String message;
//	String domain;
//	String concept;
//	String intent;
//	
//	public String getSessionId() {
//		return sessionId;
//	}
//	public void setSessionId(String sessionId) {
//		this.sessionId = sessionId;
//	}
//	public String getType() {
//		return type;
//	}
//	public void setType(String type) {
//		this.type = type;
//	}
//	public String getMessage() {
//		return message;
//	}
//	public void setMessage(String message) {
//		this.message = message;
//	}
//	public String getDomain() {
//		return domain;
//	}
//	public void setDomain(String domain) {
//		this.domain = domain;
//	}
//	public String getConcept() {
//		return concept;
//	}
//	public void setConcept(String concept) {
//		this.concept = concept;
//	}
//	public String getIntent() {
//		return intent;
//	}
//	public void setIntent(String intent) {
//		this.intent = intent;
//	}
	
	String type;
	String sessionId;
	List<String> parentNodes = new ArrayList<>();
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getSessionId() {
		return sessionId;
	}
	public void setSessionId(String sessionId) {
		this.sessionId = sessionId;
	}
	public List<String> getParentNodes() {
		return parentNodes;
	}
	public void setParentNodes(List<String> parentNodes) {
		this.parentNodes = parentNodes;
	}
}
