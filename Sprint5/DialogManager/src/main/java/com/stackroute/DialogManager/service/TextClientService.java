package com.stackroute.DialogManager.service;
/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import org.springframework.stereotype.Service;

import com.stackroute.DialogManager.api.AIConfiguration;
import com.stackroute.DialogManager.api.AIDataService;
import com.stackroute.DialogManager.api.model.AIRequest;
import com.stackroute.DialogManager.api.model.AIResponse;
import com.stackroute.DialogManager.domain.QueryDetails;

/**
 * Text client reads requests line by line from stdandart input.
 */
@Service
public class TextClientService {
	public TextClientService() {
		System.out.println("autowired");
		// this.configuration =new AIConfiguration("f68c514ac16745fcb24c2fff7d442dcb");
		this.dataService = new AIDataService(configuration);
	}

	private static final String INPUT_PROMPT = "> ";
	/**
	 * Default exit code in case of error
	 */
	// private static final int ERROR_EXIT_CODE = 1;
	private static AIConfiguration configuration = new AIConfiguration("f68c514ac16745fcb24c2fff7d442dcb");
	private AIDataService dataService = new AIDataService(configuration);

	/**
	 * @param args
	 *            List of parameters:<br>
	 *            First parameters should be valid api key<br>
	 *            Second and the following args should be file names containing
	 *            audio data.
	 * @return
	 */
	// public static void dialogFlowConnector(String apiKey) {
	//
	//
	// configuration = new AIConfiguration(apiKey);
	//
	//
	//
	//
	// String line;
	//
	//// try (BufferedReader reader = new BufferedReader(new
	// InputStreamReader(System.in))) {
	//// System.out.print(INPUT_PROMPT);
	//// while (null != (line = reader.readLine())) {
	////
	//// try {
	//// AIRequest request = new AIRequest(line);
	////
	//// AIResponse response = dataService.request(request);
	////
	//// if (response.getStatus().getCode() == 200) {
	//// System.out.println(response.getResult().getFulfillment().getSpeech());
	//// } else {
	//// System.err.println(response.getStatus().getErrorDetails());
	//// }
	//// } catch (Exception ex) {
	//// ex.printStackTrace();
	//// }
	////
	//// System.out.print(INPUT_PROMPT);
	//// }
	//// } catch (IOException ex) {
	//// ex.printStackTrace();
	//// }
	// System.out.println("See ya!");
	// }
	int context = 0;
	String requestString = "";

	public QueryDetails responseEmmitter(String requestMessage, String sessionId) {
		QueryDetails queryDetails = new QueryDetails();

		System.out.print(INPUT_PROMPT);

		String responseMessage = "";
		try {

			AIRequest request = new AIRequest(requestMessage);

			AIResponse response = this.dataService.request(request);

			responseMessage = response.getResult().getFulfillment().getSpeech();

			if (response.getStatus().getCode() == 200) {
				// response.getResult().getFulfillment().getSpeech()
				System.out.println();
				if (!response.getResult().getContexts().isEmpty()) {
					if (context == 0 || context == 2) {
						context = 1;
						requestString = requestMessage;
					} else
						requestString = requestString + " " + requestMessage;

				} else if (context == 1) {
					context = 2;
					requestString = requestString + " " + requestMessage;
				} else if (context == 2 || context == 0) {
					context = 0;
					requestString = requestMessage;
				}
				System.out.println(response.getSessionId());
				try {
					queryDetails.setConcept(response.getResult().getStringParameter("Concept"));
				} catch (IllegalStateException e) {

				}
				try {
					queryDetails.setDomain(response.getResult().getStringParameter("Domain"));
				} catch (IllegalStateException e) {

				}

				queryDetails.setIntent(response.getResult().getMetadata().getIntentName());
				queryDetails.setResponseMessage(responseMessage);
				queryDetails.setSessionId(sessionId);
				if (requestString.equals(""))
					queryDetails.setQuery(requestMessage);
				else
					queryDetails.setQuery(requestString);

				System.out.println(requestString);
			} else {
				System.err.println(response.getStatus().getErrorDetails());
			}
		} catch (Exception ex) {
			ex.printStackTrace();
		}

		System.out.print(INPUT_PROMPT);
		return queryDetails;
	}

	public AIDataService getDataService() {
		return dataService;
	}

	/**
	 * Output application usage information to stdout and exit. No return from
	 * function.
	 * 
	 * @param errorMessage
	 *            Extra error message. Would be printed to stderr if not null and
	 *            not empty.
	 * 
	 */
	// private static void showHelp(String errorMessage, int exitCode) {
	// if (errorMessage != null && errorMessage.length() > 0) {
	// System.err.println(errorMessage);
	// System.err.println();
	// }
	//
	// System.out.println("Usage: APIKEY");
	// System.out.println();
	// System.out.println("APIKEY Your unique application key");
	// System.out.println(" See https://docs.api.ai/docs/key-concepts for details");
	// System.out.println();
	// System.exit(exitCode);
	// }
}