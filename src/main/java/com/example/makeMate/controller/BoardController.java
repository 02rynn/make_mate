 
package com.example.makeMate.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.makeMate.DTO.BoardDTO;
import com.example.makeMate.DTO.ResponseDTO;
import com.example.makeMate.Entity.BoardEntity;
import com.example.makeMate.service.BoardService;




@RestController
@RequestMapping("Board")
public class BoardController {

	@Autowired
	private BoardService service;

	
	@PostMapping
	public ResponseEntity<?> createBoard(@RequestBody BoardDTO dto) {
		try {
			String temporaryboard_idx = "temporary-user"; // temporary user id.

			// (1) BoardEntity로 변환한다.
			BoardEntity entity = BoardDTO.toEntity(dto);

			// (2) id를 null로 초기화 한다. 생성 당시에는 id가 없어야 하기 때문이다.
			entity.setBoardIdx(null);

			// (3) 임시 유저 아이디를 설정 해 준다. 이 부분은 4장 인증과 인가에서 수정 할 예정이다. 지금은 인증과 인가 기능이 없으므로 한 유저(temporary-user)만 로그인 없이 사용 가능한 어플리케이션인 셈이다
			entity.setBoardIdx(temporaryboard_idx);

			// (4) 서비스를 이용해 Board엔티티를 생성한다.
			List<BoardEntity> entities = service.create(entity);

			// (5) 자바 스트림을 이용해 리턴된 엔티티 리스트를 BoardDTO리스트로 변환한다.

			List<BoardDTO> dtos = entities.stream().map(BoardDTO::new).collect(Collectors.toList());

			// (6) 변환된 BoardDTO리스트를 이용해ResponseDTO를 초기화한다.
			ResponseDTO<BoardDTO> response = ResponseDTO.<BoardDTO>builder().data(dtos).build();

			// (7) ResponseDTO를 리턴한다.
			return ResponseEntity.ok().body(response);
		} catch (Exception e) {
			// (8) 혹시 예외가 나는 경우 dto대신 error에 메시지를 넣어 리턴한다.

			String error = e.getMessage();
			ResponseDTO<BoardDTO> response = ResponseDTO.<BoardDTO>builder().error(error).build();
			return ResponseEntity.badRequest().body(response);
		}
	}

	@GetMapping
	public ResponseEntity<?> retrieveBoardList() {
		String temporaryboard_idx = "temporary-user"; // temporary user id.

		// (1) 서비스 메서드의 retrieve메서드를 사용해 Board리스트를 가져온다
		List<BoardEntity> entities = service.retrieve(temporaryboard_idx);

		// (2) 자바 스트림을 이용해 리턴된 엔티티 리스트를 BoardDTO리스트로 변환한다.
		List<BoardDTO> dtos = entities.stream().map(BoardDTO::new).collect(Collectors.toList());

		// (6) 변환된 BoardDTO리스트를 이용해ResponseDTO를 초기화한다.
		ResponseDTO<BoardDTO> response = ResponseDTO.<BoardDTO>builder().data(dtos).build();

		// (7) ResponseDTO를 리턴한다.
		return ResponseEntity.ok().body(response);
	}


	@PutMapping
	public ResponseEntity<?> updateBoard(@RequestBody BoardDTO dto) {
		String temporaryboard_idx = "temporary-user"; // temporary user id.

		// (1) dto를 entity로 변환한다.
		BoardEntity entity = BoardDTO.toEntity(dto);

		// (2) id를 temporaryboard_idx로 초기화 한다. 여기는 4장 인증과 인가에서 수정 할 예정이다.
		entity.setBoardIdx(temporaryboard_idx);

		// (3) 서비스를 이용해 entity를 업데이트 한다.
		List<BoardEntity> entities = service.update(entity);

		// (4) 자바 스트림을 이용해 리턴된 엔티티 리스트를 BoardDTO리스트로 변환한다.
		List<BoardDTO> dtos = entities.stream().map(BoardDTO::new).collect(Collectors.toList());

		// (5) 변환된 BoardDTO리스트를 이용해ResponseDTO를 초기화한다.
		ResponseDTO<BoardDTO> response = ResponseDTO.<BoardDTO>builder().data(dtos).build();

		// (6) ResponseDTO를 리턴한다.
		return ResponseEntity.ok().body(response);
	}

	@DeleteMapping
	public ResponseEntity<?> deleteBoard(@RequestBody BoardDTO dto) {
		try {
			String temporaryboard_idx = "temporary-user"; // temporary user id.

			// (1) BoardEntity로 변환한다.
			BoardEntity entity = BoardDTO.toEntity(dto);

			// (2) 임시 유저 아이디를 설정 해 준다. 이 부분은 4장 인증과 인가에서 수정 할 예정이다. 지금은 인증과 인가 기능이 없으므로 한 유저(temporary-user)만 로그인 없이 사용 가능한 어플리케이션인 셈이다
			entity.setBoardIdx(temporaryboard_idx);

			// (3) 서비스를 이용해 entity를 삭제 한다.
			List<BoardEntity> entities = service.delete(entity);

			// (4) 자바 스트림을 이용해 리턴된 엔티티 리스트를 BoardDTO리스트로 변환한다.
			List<BoardDTO> dtos = entities.stream().map(BoardDTO::new).collect(Collectors.toList());

			// (5) 변환된 BoardDTO리스트를 이용해ResponseDTO를 초기화한다.
			ResponseDTO<BoardDTO> response = ResponseDTO.<BoardDTO>builder().data(dtos).build();

			// (6) ResponseDTO를 리턴한다.
			return ResponseEntity.ok().body(response);
		} catch (Exception e) {
			// (8) 혹시 예외가 나는 경우 dto대신 error에 메시지를 넣어 리턴한다.
			String error = e.getMessage();
			ResponseDTO<BoardDTO> response = ResponseDTO.<BoardDTO>builder().error(error).build();
			return ResponseEntity.badRequest().body(response);
		}
	}

}

//package com.example.makeMate.controller;
//
//
//
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.example.makeMate.DTO.BoardDTO;
//import com.example.makeMate.DTO.ResponseDTO;
//import com.example.makeMate.Entity.BoardEntity;
//import com.example.makeMate.service.BoardService;
//
//import java.util.ArrayList;
//import java.util.List;
//import java.util.stream.Collectors;
//
//@RestController
//@RequestMapping("Board")
//public class BoardController {
//
//	@Autowired
//	private BoardService service;
//
//	
//	@PostMapping
//	public ResponseEntity<?> createBoard(@RequestBody BoardDTO dto) {
//		try {
//			String temporaryUserId = "temporary-user"; // temporary user id.
//
//			// (1) BoardEntity로 변환한다.
//			BoardEntity entity = BoardDTO.toEntity(dto);
//
//			// (2) id를 null로 초기화 한다. 생성 당시에는 id가 없어야 하기 때문이다.
//			entity.setUserId(null);
//
//			// (3) 임시 유저 아이디를 설정 해 준다. 이 부분은 4장 인증과 인가에서 수정 할 예정이다. 지금은 인증과 인가 기능이 없으므로 한 유저(temporary-user)만 로그인 없이 사용 가능한 어플리케이션인 셈이다
//			entity.setUserId(temporaryUserId);
//
//			// (4) 서비스를 이용해 Board엔티티를 생성한다.
//			List<BoardEntity> entities = service.create(entity);
//
//			// (5) 자바 스트림을 이용해 리턴된 엔티티 리스트를 BoardDTO리스트로 변환한다.
//
//			List<BoardDTO> dtos = entities.stream().map(BoardDTO::new).collect(Collectors.toList());
//
//			// (6) 변환된 BoardDTO리스트를 이용해ResponseDTO를 초기화한다.
//			ResponseDTO<BoardDTO> response = ResponseDTO.<BoardDTO>builder().data(dtos).build();
//
//			// (7) ResponseDTO를 리턴한다.
//			return ResponseEntity.ok().body(response);
//		} catch (Exception e) {
//			// (8) 혹시 예외가 나는 경우 dto대신 error에 메시지를 넣어 리턴한다.
//
//			String error = e.getMessage();
//			ResponseDTO<BoardDTO> response = ResponseDTO.<BoardDTO>builder().error(error).build();
//			return ResponseEntity.badRequest().body(response);
//		}
//	}
//
//	@GetMapping
//	public ResponseEntity<?> retrieveBoardList() {
//		String temporaryUserId = "temporary-user"; // temporary user id.
//
//		// (1) 서비스 메서드의 retrieve메서드를 사용해 Board리스트를 가져온다
//		List<BoardEntity> entities = service.retrieve(temporaryUserId);
//
//		// (2) 자바 스트림을 이용해 리턴된 엔티티 리스트를 BoardDTO리스트로 변환한다.
//		List<BoardDTO> dtos = entities.stream().map(BoardDTO::new).collect(Collectors.toList());
//
//		// (6) 변환된 BoardDTO리스트를 이용해ResponseDTO를 초기화한다.
//		ResponseDTO<BoardDTO> response = ResponseDTO.<BoardDTO>builder().data(dtos).build();
//
//		// (7) ResponseDTO를 리턴한다.
//		return ResponseEntity.ok().body(response);
//	}
//
//
//	@PutMapping
//	public ResponseEntity<?> updateBoard(@RequestBody BoardDTO dto) {
//		String temporaryUserId = "temporary-user"; // temporary user id.
//
//		// (1) dto를 entity로 변환한다.
//		BoardEntity entity = BoardDTO.toEntity(dto);
//
//		// (2) id를 temporaryUserId로 초기화 한다. 여기는 4장 인증과 인가에서 수정 할 예정이다.
//		entity.setUserId(temporaryUserId);
//
//		// (3) 서비스를 이용해 entity를 업데이트 한다.
//		List<BoardEntity> entities = service.update(entity);
//
//		// (4) 자바 스트림을 이용해 리턴된 엔티티 리스트를 BoardDTO리스트로 변환한다.
//		List<BoardDTO> dtos = entities.stream().map(BoardDTO::new).collect(Collectors.toList());
//
//		// (5) 변환된 BoardDTO리스트를 이용해ResponseDTO를 초기화한다.
//		ResponseDTO<BoardDTO> response = ResponseDTO.<BoardDTO>builder().data(dtos).build();
//
//		// (6) ResponseDTO를 리턴한다.
//		return ResponseEntity.ok().body(response);
//	}
//
//	@DeleteMapping
//	public ResponseEntity<?> deleteBoard(@RequestBody BoardDTO dto) {
//		try {
//			String temporaryUserId = "temporary-user"; // temporary user id.
//
//			// (1) BoardEntity로 변환한다.
//			BoardEntity entity = BoardDTO.toEntity(dto);
//
//			// (2) 임시 유저 아이디를 설정 해 준다. 이 부분은 4장 인증과 인가에서 수정 할 예정이다. 지금은 인증과 인가 기능이 없으므로 한 유저(temporary-user)만 로그인 없이 사용 가능한 어플리케이션인 셈이다
//			entity.setUserId(temporaryUserId);
//
//			// (3) 서비스를 이용해 entity를 삭제 한다.
//			List<BoardEntity> entities = service.delete(entity);
//
//			// (4) 자바 스트림을 이용해 리턴된 엔티티 리스트를 BoardDTO리스트로 변환한다.
//			List<BoardDTO> dtos = entities.stream().map(BoardDTO::new).collect(Collectors.toList());
//
//			// (5) 변환된 BoardDTO리스트를 이용해ResponseDTO를 초기화한다.
//			ResponseDTO<BoardDTO> response = ResponseDTO.<BoardDTO>builder().data(dtos).build();
//
//			// (6) ResponseDTO를 리턴한다.
//			return ResponseEntity.ok().body(response);
//		} catch (Exception e) {
//			// (8) 혹시 예외가 나는 경우 dto대신 error에 메시지를 넣어 리턴한다.
//			String error = e.getMessage();
//			ResponseDTO<BoardDTO> response = ResponseDTO.<BoardDTO>builder().error(error).build();
//			return ResponseEntity.badRequest().body(response);
//		}
//	}
//
//}

