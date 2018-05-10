package com.stackroute.DialogManager.domain;

import java.util.ArrayList;

public class Recommendations {

	private ArrayList<RecommendUrl> intentRecommendations;
	private ArrayList<RecommendUrl> subConceptRecommendations;
	private ArrayList<RecommendUrl> relatedConceptRecommendations;
	private String sessionId;
	public ArrayList<RecommendUrl> getIntentRecommendations() {
		return intentRecommendations;
	}
	public void setIntentRecommendations(ArrayList<RecommendUrl> intentRecommendations) {
		this.intentRecommendations = intentRecommendations;
	}
	public ArrayList<RecommendUrl> getSubConceptRecommendations() {
		return subConceptRecommendations;
	}
	public void setSubConceptRecommendations(ArrayList<RecommendUrl> subConceptRecommendations) {
		this.subConceptRecommendations = subConceptRecommendations;
	}
	public ArrayList<RecommendUrl> getRelatedConceptRecommendations() {
		return relatedConceptRecommendations;
	}
	public void setRelatedConceptRecommendations(ArrayList<RecommendUrl> relatedConceptRecommendations) {
		this.relatedConceptRecommendations = relatedConceptRecommendations;
	}
	public String getSessionId() {
		return sessionId;
	}
	public void setSessionId(String sessionId) {
		this.sessionId = sessionId;
	}
}
