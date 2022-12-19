package com.example.makeMate.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.makeMate.Entity.Board;
import com.example.makeMate.service.BoardService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")





public class BoardController {

	@Autowired
	private BoardService boardService;
	
//	---------서비스를 호출 글목록 데이터 리턴
	@GetMapping("/board")
	public List<Board> getAllBoards() {
		
		return boardService.getAllBoard();



	
}
}