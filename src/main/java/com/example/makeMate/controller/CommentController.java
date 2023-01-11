package com.example.makeMate.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.makeMate.Entity.CommentEntity;
import com.example.makeMate.Entity.MessageEntitiy;
import com.example.makeMate.Entity.ReviewEntity;
import com.example.makeMate.Repository.CommentRepository;
import com.example.makeMate.Repository.ReveiewRepository;

import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
public class CommentController {
	
	//insert
	@Autowired
	private CommentRepository repository;
	//update 
	
	//댓글 가져오기
	@GetMapping("/mycomment/{loginId}")
	@ResponseBody
	public List<CommentEntity> list(@PathVariable String loginId) {
		
		log.info("댓글 가져오기 요청 들어옴{}",loginId);

		return repository.findCommentByLoginId(loginId);
	}
	
	@Transactional
	@PostMapping("/comment/{no}/{comment}/{userId}")
	@ResponseBody
	public CommentEntity save(@PathVariable int no,@PathVariable String comment ,@PathVariable String userId) {

		CommentEntity entity = new CommentEntity();
		entity.setCommentId(2313);
		entity.setNo(no);
		entity.setCommentWriter(userId);
		entity.setContent(comment);

		
		log.info("요청 들어옴{}",no);
		log.info("요청 들어옴{}",userId);
		log.info("요청 들어옴{}",comment);

		return repository.save(entity);
	}

	
	

}
