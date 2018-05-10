package com.stackroute.DialogManager.domain;

public class QueryDetails {
private String sessionId;
private String concept;
private String domain;
private String query;
private String intent;
private String responseMessage;
public String getSessionId() {
	return sessionId;
}
public void setSessionId(String sessionId) {
	this.sessionId = sessionId;
}
public String getConcept() {
	return concept;
}
public void setConcept(String concept) {
	this.concept = concept;
}
public String getDomain() {
	return domain;
}
public void setDomain(String domain) {
	this.domain = domain;
}
public String getQuery() {
	return query;
}
public void setQuery(String query) {
	this.query = query;
}
public String getIntent() {
	return intent;
}
public void setIntent(String intent) {
	this.intent = intent;
}
public String getResponseMessage() {
	return responseMessage;
}
public void setResponseMessage(String responseMessage) {
	this.responseMessage = responseMessage;
}

}
