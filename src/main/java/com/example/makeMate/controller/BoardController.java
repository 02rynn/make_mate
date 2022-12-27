package com.example.makeMate.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.makeMate.Entity.BoardEntity;
import com.example.makeMate.service.BoardService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class BoardController {
	
	@Autowired
	private BoardService boardService;

   
	// get all board 
	@GetMapping("/board")
	public List<BoardEntity> getAllBoards() {
		
		return boardService.getAllBoard();
	}
	
}
