package com.example.makeMate.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.makeMate.Entity.MessageEntitiy;
import com.example.makeMate.Entity.ReviewEntity;
import com.example.makeMate.Repository.ReveiewRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
public class ReviewController {
	
	//insert
	@Autowired
	private ReveiewRepository repository;
	//update 
	
//	//댓글 가져오기
//	@GetMapping("/review/{no}")
//	@ResponseBody
//	public List<ReviewEntity> list(@PathVariable int no) {
//
//
//		
//		log.info("요청 들어옴{}",no);
//
//		return repository.findReviewByNO(no);
//	}

	
	

}
