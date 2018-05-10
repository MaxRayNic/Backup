package com.stackroute.DialogManager.controller;

import java.util.LinkedHashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

import com.google.gson.Gson;
import com.stackroute.DialogManager.api.AIServiceException;
import com.stackroute.DialogManager.domain.Message;
import com.stackroute.DialogManager.domain.QueryDetails;
import com.stackroute.DialogManager.domain.RecommendationMessage;
import com.stackroute.DialogManager.domain.Recommendations;
import com.stackroute.DialogManager.domain.SpellCheck;
import com.stackroute.DialogManager.domain.UrlDetails;
import com.stackroute.DialogManager.messaging.Producer;
import com.stackroute.DialogManager.messaging.Receiver;
import com.stackroute.DialogManager.service.TextClientService;

@Controller
public class WebSocketController {

	private final SimpMessagingTemplate template;

	LinkedHashMap<String, TextClientService> map = new LinkedHashMap<>();

	@Autowired
	public WebSocketController(SimpMessagingTemplate template) {
		this.template = template;
		System.out.println("session 3");
	}

	@Autowired
	Producer producer;
	TextClientService textClientService;
	@Autowired
	Receiver receiver;
	@Autowired
	Gson gson;

	@MessageMapping("/send/message")
	public void onReceivedMessage(Message message) {
		if (map.containsKey(message.getSessionId())) {
			textClientService = map.get(message.getSessionId());
		} else {
			map.put(message.getSessionId(), new TextClientService());
			textClientService = map.get(message.getSessionId());
		}

		QueryDetails queryDetails = textClientService.responseEmmitter(message.getMessage(), message.getSessionId());
		String responseMessage = queryDetails.getResponseMessage();
		this.template.convertAndSend("/chat/" + message.getSessionId(), responseMessage);
		String jsonString = gson.toJson(queryDetails);

		System.out.println(jsonString);
		if (queryDetails.getResponseMessage().equals("I can help you with that"))
			producer.produceMsg(jsonString);
		else if (queryDetails.getResponseMessage().equals("Sorry I could not find the concept :(")) {
			producer.produceMsg(jsonString);

		}

	}

	@MessageMapping("/send/recommendation")
	public void toPipeline(RecommendationMessage message) {

		QueryDetails queryDetails = new QueryDetails();
		queryDetails.setQuery(message.getMessage());
		queryDetails.setSessionId(message.getSessionId());
		queryDetails.setIntent(message.getIntent());

		String jsonString = gson.toJson(queryDetails);
		System.out.println(jsonString);
		producer.produceMsg(jsonString);

	}

	public void onReceivedMessage1() {

		if (receiver.getMessage1() != null) {
			UrlDetails urlDetails = gson.fromJson(receiver.getMessage1(), UrlDetails.class);
			System.out.println("sessionId 1" + urlDetails.getSessionId());
			this.template.convertAndSend("/search/" + urlDetails.getSessionId(), this.receiver.getMessage1());
		}
	}

	public void onReceivedMessage() {
		SpellCheck spellCheck = receiver.getMessage();

		if (spellCheck != null) {
			if (spellCheck.getType().equals("CYIY")) {
				textClientService = this.map.get(spellCheck.getSessionId());
				System.out.println("here");
				try {
					textClientService.getDataService().resetActiveContexts();
				} catch (AIServiceException e) {

					e.printStackTrace();
				}
			} else if (!spellCheck.getParentNodes().isEmpty()) {
				this.template.convertAndSend("/chat/" + spellCheck.getSessionId(), spellCheck.getParentNodes());
				spellCheck = null;
			}
		}
	}

	public void onReceivedMessage2() {
		if (receiver.getMessage2() != null) {
			Recommendations recommendations = gson.fromJson(receiver.getMessage2(), Recommendations.class);
			System.out.println("sessionId" + recommendations.getSessionId());
			this.template.convertAndSend("/recommendation/" + recommendations.getSessionId(),
					this.receiver.getMessage2());
		}
	}

}
