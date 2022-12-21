package com.example.makeMate.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.makeMate.Entity.MessageEntitiy;
import com.example.makeMate.Repository.MsgRepository;


@RestController
public class MsgController {

	@Autowired
	private MsgRepository msgRepository;
	
	@GetMapping("/msgList")
	@ResponseBody
	public List<MessageEntitiy> list(){
		
		return msgRepository.findAll();
	}
}
