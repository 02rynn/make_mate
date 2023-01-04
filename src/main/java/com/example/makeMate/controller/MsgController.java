package com.example.makeMate.controller;


import java.sql.Date;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.makeMate.Entity.MessageEntitiy;
import com.example.makeMate.Repository.MsgRepository;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
public class MsgController {

	@Autowired
	private MsgRepository msgRepository;

	@GetMapping("/msgList")
	@ResponseBody
	public List<MessageEntitiy> list(String user) {


		
		log.info("요청 들어옴{}",user);

		return msgRepository.findRecentMsg(user);
	}
	
	@GetMapping("/msgListUnRead")
	@ResponseBody
	public List<Long> unReadConut(String user) {

		log.info("요청 들어옴");
		List<MessageEntitiy>list = msgRepository.findRecentMsg(user);
		List<Long> unreadCount = new ArrayList<Long>();
		for(MessageEntitiy msg : list) {
		Long num =	(long) msgRepository.findAllByreciver_idAndread_ynAndRoom_id(msg.getRoom_id(),user);	
		unreadCount.add(num);
			
		}
		
		

		return unreadCount;
	}

	@PostMapping("/sendMsg")
	@ResponseBody
	public MessageEntitiy insertMsg(@RequestBody String content) {
		
	
		
		MessageEntitiy message = new MessageEntitiy();
		Timestamp now = new Timestamp(System.currentTimeMillis());
		Long room_id = msgRepository.getMaxRoom_id();
		log.info(content+"@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");

		log.info(String.valueOf(now));
		log.info("post요청 들어옴");
		System.out.println(msgRepository.findAllByreciver_idAndread_yn("asd").size());

        JSONParser parser = new JSONParser();
    	String sender_id =null;
    	String Reciver_id =null;
        try {
			
        	JSONObject jsonObject = (JSONObject) parser.parse(content);
        	message.setContent((String)jsonObject.get("content"));	
        	 sender_id = (String)jsonObject.get("sender_id");
        	 Reciver_id = (String)jsonObject.get("reciver_id");
        } catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		log.info(Reciver_id);
		log.info(sender_id);
        
        
        
  
        Long id = msgRepository.findRoom_IdbySender_idAndReciver_id(sender_id,Reciver_id);
        log.info("id:{}",id);
        if(id==null) {
        	message.setRoom_id(room_id+1);
        }else {
        	message.setRoom_id(id);
        }
        log.info("id:{}",id);
        

       
        
        message.setMsg_id(1);
        message.setSender_id(sender_id);
		message.setReciver_id(Reciver_id);
		message.setRead_yn(0);
		message.setSend_time((Timestamp)now);
		System.out.println(message.toString());
		
		
		
		
		
		
		
		msgRepository.save(message);
		
		
		return message;
	}
	

	@Transactional
	@ResponseBody
	@GetMapping("/msgUser")
	public List<MessageEntitiy> list2(Long room_id) {
		

	
		log.info("room_id{}",room_id);
		
		List<MessageEntitiy> list = new ArrayList<MessageEntitiy>();
		int aD = msgRepository.updateRead_yn(room_id);
		
		log.info("ad:",aD);
		
		list = msgRepository.findtMsgList(room_id);
		
		for(MessageEntitiy msg :list) {
			msg.setRead_yn(1);
		}
		
		

		
		return list;

	}
}
