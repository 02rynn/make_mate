package com.example.makeMate.controller;


import java.sql.Date;
import java.text.ParseException;
import java.util.List;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.makeMate.Entity.MessageEntitiy;
import com.example.makeMate.Repository.MsgRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
public class MsgController {

	@Autowired
	private MsgRepository msgRepository;

	@GetMapping("/msgList")
	@ResponseBody
	public List<MessageEntitiy> list() {

		log.info("요청 들어옴");

		return msgRepository.findAll();
	}

	@PostMapping("/sendMsg")
	@ResponseBody
	public MessageEntitiy insertMsg(@RequestBody String content) {
		MessageEntitiy message = new MessageEntitiy();
		Date now = new java.sql.Date(System.currentTimeMillis());
		log.info(content);
		log.info("post요청 들어옴");
		
		System.out.println(content.getClass());
        JSONParser parser = new JSONParser();
        try {
			
        	JSONObject jsonObject = (JSONObject) parser.parse(content);
        	message.setContent((String)jsonObject.get("content"));		
        } catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        
        int id = msgRepository.findRoom_IdbySender_idAndReciver_id(1,2);
        log.info("id:{}",id);
        
		message.setSender_id(1);
		message.setReciver_id(3);
		message.setRead_yn(0);
//		message.setSend_time((java.sql.Date) now);
		message.setSend_time((java.sql.Date)now);
//		message.setContent(jsonObject.get("content"));
		
		msgRepository.save(message);
		
		
		return message;
	}
}
