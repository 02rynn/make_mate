
package com.example.makeMate.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.makeMate.DTO.BoardDTO;
import com.example.makeMate.DTO.ResponseDTO;
import com.example.makeMate.Entity.BoardEntity;
import com.example.makeMate.service.boardService;



@RestController
@RequestMapping


public class BoardController {

@Autowired

public boardService service;
	
	@PostMapping
	
	public ResponseEntity<?> createBoard(@RequestBody BoardDTO dto){
		
		try {
			
			String temporaryUserId = "temporary-user";
			
			BoardEntity entity = BoardDTO.toEntity(dto);
			
			entity.setId(null);
			
			
			
			
			entity.setUserId(temporaryUserId);
			
			List<BoardEntity> entities = service.create(entity);
			
			List<BoardDTO> dtos = entities.stream().map(BoardDTO :: new).collect(Collectors.toList());
			
			ResponseDTO<BoardDTO> response = ResponseDTO.<BoardDTO>builder().data(dtos).build();
			
			return ResponseEntity.badRequest().body(response);			
		}catch (Exception e) {
			
			String error = e.getMessage();
			ResponseDTO<BoardDTO> response = ResponseDTO.<BoardDTO>builder().error(error).build();
			
			return ResponseEntity.badRequest().body(response);
		
		
	}
	
	}
	
	@GetMapping
	public ResponseEntity<?> retrieveBoard(){
		
		String temporaryUserId = "temproary-user";
		
		List<BoardEntity> entities = service.retrieve(temporaryUserId);
		
		List<BoardDTO> dtos = entities.stream().map(BoardDTO::new).collect(Collectors.toList());
		
		ResponseDTO<BoardDTO> response = ResponseDTO.<BoardDTO>builder().data(dtos).build();
		
		return ResponseEntity.ok().body(response);
	}
	
	
	@DeleteMapping
	public ResponseEntity<?> deleteBoard(@RequestBody BoardDTO dto){
		
		
		try {
			
	        String temporaryUserId = "temporary-user";
			
			BoardEntity entity = BoardDTO.toEntity(dto);
			
			entity.setId(null);
			
			
			
			
			entity.setUserId(temporaryUserId);
			List<BoardEntity> entities = service.delete(entity);
			List<BoardDTO> dtos = entities.stream().map(BoardDTO::new).collect(Collectors.toList());
			
			ResponseDTO<BoardDTO> response = ResponseDTO.<BoardDTO>builder().data(dtos).build();
		
			return ResponseEntity.ok().body(response);
			
		}catch (Exception e) {
			
			String error = e.getMessage();
			ResponseDTO<BoardDTO> response = ResponseDTO.<BoardDTO>builder().error(error).build();
			
			return ResponseEntity.badRequest().body(response);
		
		
	}
	
		
		
		
		
	}
	
}
	
	
	
	

	

