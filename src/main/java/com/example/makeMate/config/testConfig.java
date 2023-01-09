//package com.example.makeMate.config;
//
//import jakarta.websocket.HandshakeResponse;
//import jakarta.websocket.server.HandshakeRequest;
//import jakarta.websocket.server.ServerEndpointConfig;
//
//import org.springframework.context.annotation.Configuration;
//
//import jakarta.servlet.http.HttpSession;
//import jakarta.websocket.ClientEndpointConfig.Configurator;
//
//
//@Configuration
//public class testConfig extends Configurator{
//	
//	
//	
//	public void modifyHandshake(ServerEndpointConfig sec,HandshakeRequest req , 
//			HandshakeResponse resp) {
//		
//		HttpSession session = (HttpSession)req.getHttpSession();
//		
//		if(session != null) {
//			sec.getUserProperties().put("Session", session);
//		}
//		
//	}
//	
//
//}
