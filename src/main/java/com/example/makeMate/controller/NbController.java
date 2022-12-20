package com.example.makeMate.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
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
@RequestMapping("nb")


public class NbController {

@Autowired
private NbService service;

@PostMapping
public ResponseEntity<?> createNb(@RequestBody NbDTO dto){
	
	try {
		
		String temporaryUserId = "temproary-user";
		
		NbEntity entity = NbDTO.toEntity(dto);
		
		entity.setId(null);
		
		
		entity.setUserId(temporaryUserId);
		
		List<NbEntity> entities = service.create(entity) ;
	
		List<NbDTO> dtos = entities.stream().map(NbDTO::new).collect(Collectors.toList());
		
		ResponseDTO<NbDTO> response = ResponseDTO.<NbDTO>builder().data(dtos).build();
		
		return ResponseEntity.ok().body(response);
		
	}catch (Exception e) {
		
		String error = e.getMessage();
		ResponseDTO<NbDTO> response = ResponseDTO.<NbDTO>builder().error(error).build();
		
		return ResponseEntity.badRequest().body(response);
	}
	
}

@GetMapping
public ResponseEntity<?> retrieveNbList(){
	
	String temporaryUserId = "temproary-user";
	
	List<NbEntity> entities = service.retrieve(temporaryUserId);
	
	List<NbDTO> dtos = entities.stream().map(NbDTO::new).collect(Collectors.toList());
	
	ResponseDTO<NbDTO> response = ResponseDTO.<NbDTO>builder().data(dtos).build();
	
	return ResponseEntity.ok().body(response);
}


@DeleteMapping
public ResponseEntity<?> deleteTodo(@RequestBody NbDTO dto) {
	try {
		String temporaryUserId = "temporary-user"; // temporary user id.

		// (1) TodoEntity로 변환한다.
		NbEntity entity = NbDTO.toEntity(dto);

		// (2) 임시 유저 아이디를 설정 해 준다. 이 부분은 4장 인증과 인가에서 수정 할 예정이다. 지금은 인증과 인가 기능이 없으므로 한 유저(temporary-user)만 로그인 없이 사용 가능한 어플리케이션인 셈이다
		entity.setUserId(temporaryUserId);

		// (3) 서비스를 이용해 entity를 삭제 한다.
		List<NbEntity> entities = service.delete(entity);

		// (4) 자바 스트림을 이용해 리턴된 엔티티 리스트를 TodoDTO리스트로 변환한다.
		List<NbDTO> dtos = entities.stream().map(NbDTO::new).collect(Collectors.toList());

		// (5) 변환된 TodoDTO리스트를 이용해ResponseDTO를 초기화한다.
		ResponseDTO<NbDTO> response = ResponseDTO.<NbDTO>builder().data(dtos).build();

		// (6) ResponseDTO를 리턴한다.
		return ResponseEntity.ok().body(response);
	} catch (Exception e) {
		// (8) 혹시 예외가 나는 경우 dto대신 error에 메시지를 넣어 리턴한다.
		String error = e.getMessage();
		ResponseDTO<NbDTO> response = ResponseDTO.<NbDTO>builder().error(error).build();
		return ResponseEntity.badRequest().body(response);
	}
}

}