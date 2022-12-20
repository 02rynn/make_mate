package com.example.makeMate.controller;

import java.util.Date;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.makeMate.Entity.MessageEntitiy;

@RestController
public class HelloWorldController {

	@GetMapping("/api/hello")
	public String test() {
		return "우리 5조 화이팅" + new Date() + "";
	}

	@GetMapping("/api/test")
	public String test2() {

		return "안녕하세요 임규진입니다";
	}

    @MessageMapping("/hello")
    @SendTo("/topic/greetings")
    public MessageEntitiy message(String content) throws InterruptedException {
        Thread.sleep(2000);
        MessageEntitiy message = new MessageEntitiy();
        message.setContent(content);
    
        return  message;
    }

}