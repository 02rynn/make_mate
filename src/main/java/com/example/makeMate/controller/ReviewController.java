package com.example.makeMate.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	

	@PostMapping("/review")
	@ResponseBody
	public ReviewEntity insert_review(@RequestBody ReviewEntity reviewEntity) {

		log.info("요청 들어옴{} {} ",reviewEntity);

		return repository.save(reviewEntity);

	}
	
	//내가 쓴 리뷰
	@GetMapping("/review/{loginId}")
	@ResponseBody
	public List<ReviewEntity> review_send(@PathVariable String loginId) {
		
		log.info("요청 들어옴{}", loginId);
		
		return repository.findMyReview(loginId);
		
	}
	
	//내가 받은 후기
	@GetMapping("/myreview/{loginId}")
	@ResponseBody
	public List<ReviewEntity> selectMyReview(@PathVariable String loginId){
		log.info("내가 받은 후기 요청 들어옴{}", loginId);
		return repository.findTheirReview(loginId);
	}
	
	//내가 댓글 단 글 
	@GetMapping("/comment/{loginId}")
	@ResponseBody
	public List<ReviewEntity> findComment (@PathVariable String loginId) {
		
		log.info("요청 들어옴{}", loginId);
		
		return repository.findMyReview(loginId);
		
	}

	
	

}
