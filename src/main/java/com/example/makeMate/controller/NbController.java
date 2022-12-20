package com.example.makeMate.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.makeMate.DTO.NbDTO;
import com.example.makeMate.DTO.ResponseDTO;
import com.example.makeMate.Entity.NbEntity;
import com.example.makeMate.service.NbService;

import lombok.Builder;

@RestController
@RequestMapping("board")

public class NbController {

	@Autowired
	private NbService service;
	
@PostMapping
public ResponseEntity<?> createNb(@RequestBody NbDTO dto){
	
	try {
		
		String temporaryUserId = "temporary-user";
		
		NbEntity entity = NbDTO.toEntity(dto);
		
		entity.setId(temporaryUserId);
		
		List<NbEntity> entities = service.create(entity);
		
		List<NbDTO> dtos = entities.stream().map(NbDTO :: new).collect(Collectors.toList());
		
		ResponseDTO<NbDTO> response =   ResponseDTO.<NbDTO>builder().data(dtos).build();
		
		return ResponseEntity.ok().body(response);
	} catch (Exception e) {
		
		String error = e.getMessage();
		ResponseDTO<NbDTO> response = ResponseDTO.<NbDTO>builder().error(error).build();
		return ResponseEntity.badRequest().body(response);
	}
}
	
	
	
}
	
	
	
