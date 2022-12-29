package com.example.makeMate.controller;


import java.sql.Date;
import java.sql.Timestamp;
import java.util.List;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
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
		Long room_id = msgRepository.getMaxRoom_id();
		System.out.println(room_id);
		String user = "asd";
		log.info("요청 들어옴");

		return msgRepository.findRecentMsg(user);
	}

	@PostMapping("/sendMsg")
	@ResponseBody
	public MessageEntitiy insertMsg(@RequestBody String content) {
		MessageEntitiy message = new MessageEntitiy();
		Timestamp now = new Timestamp(System.currentTimeMillis());
		Long room_id = msgRepository.getMaxRoom_id();
		log.info(content);
		log.info(String.valueOf(now));
		log.info("post요청 들어옴");
		System.out.println(msgRepository.findAllByreciver_idAndread_yn("asd").size());

        JSONParser parser = new JSONParser();
        try {
			
        	JSONObject jsonObject = (JSONObject) parser.parse(content);
        	message.setContent((String)jsonObject.get("content"));		
        } catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        
        
        
        
        String sender_id  = msgRepository.findLogin_idById(1);
        log.info("send_id:{}",sender_id);
        
        String Reciver_id  = msgRepository.findLogin_idById(2);
        log.info("Reciver_id:{}",Reciver_id);
        Long id = msgRepository.findRoom_IdbySender_idAndReciver_id(sender_id,Reciver_id);
        log.info("id:{}",id);
        if(id==null) {
        	message.setRoom_id(room_id+1);
        }else {
        	message.setRoom_id(id);
        }
        log.info("id:{}",id);
        
//		message.setSend_time((java.sql.Date) now);
//		message.setContent(jsonObject.get("constent"));
       
        
        message.setMsg_id(1);
        message.setSender_id(sender_id);
		message.setReciver_id(Reciver_id);
		message.setRead_yn(0);
		message.setSend_time((Timestamp)now);
		System.out.println(message.toString());
		
		
		
		
		
		
		
		msgRepository.save(message);
		
		
		return message;
	}
	

	@ResponseBody
	@GetMapping("/msgUser")
	public List<MessageEntitiy> list2(int room_id) {
		
		int no = room_id;
		
		
		return msgRepository.findtMsgList(no);

	}
}
