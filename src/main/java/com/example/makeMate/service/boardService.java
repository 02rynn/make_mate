package com.example.makeMate.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.makeMate.Entity.Board;
import com.example.makeMate.Repository.BoardRepository;


@Service

public class BoardService  {

	
	@Autowired
	private BoardRepository boardRepository; 
	
	public List<Board> getAllBoard() {
		return boardRepository.findAll();



}
}
