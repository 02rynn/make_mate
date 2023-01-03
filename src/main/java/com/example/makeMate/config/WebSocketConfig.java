package com.example.makeMate.config;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;
import org.springframework.web.socket.server.support.HttpSessionHandshakeInterceptor;

import com.example.makeMate.Handler.EchoHandler;
//import com.example.makeMate.intercepter.HandshakeInterceptor;
import com.example.makeMate.intercepter.HandshakeInterceptor;

import lombok.RequiredArgsConstructor;
 
//@Configuration
//@EnableWebSocket
//@RequiredArgsConstructor
//public class WebSocketConfig implements WebSocketConfigurer{
//    @Autowired
//    private EchoHandler echoHandler;
// 
//    @Override
//    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
//        registry.addHandler(echoHandler, "/echo").setAllowedOriginPatterns("*") //.setAllowedOrigins("*")
//        .withSockJS()
//        .setClientLibraryUrl(
//          "https://cdn.jsdelivr.net/sockjs/latest/sockjs.min.js")
////        .setInterceptors(new HttpSessionHandshakeInterceptor());
//        .setInterceptors(new HandshakeInterceptor());
//        
//    }
    
    
    

    
//}
@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {
    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/ws").setAllowedOriginPatterns("*").withSockJS();
    }

    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry) {
        registry.setApplicationDestinationPrefixes("/app");
        registry.enableSimpleBroker("/chatroom","/user");
        registry.setUserDestinationPrefix("/user");
    }
}