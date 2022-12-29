package com.example.makeMate.controller;


import java.text.SimpleDateFormat;
import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.makeMate.DTO.ResponseDTO;
import com.example.makeMate.DTO.UserDTO;
import com.example.makeMate.Entity.UserEntity;
import com.example.makeMate.service.UserService;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
public class UserController {

	
	

	@Autowired
	private UserService userService;
	
			LocalDate now = LocalDate.now();
        	int year=  now.getYear(); // 올해 연도 
//   
//	SimpleDateFormat FormatSTR = new SimpleDateFormat("yyyy/MM/dd");
        	
	@PostMapping("/signup")
//	public UserDTO registerUser (@RequestBody UserDTO userDTO){ //요청받은 정보를 회원가입메소드(create)에 넣고 이걸 userDTO에 넣어서 반환
	public ResponseEntity<?> registerUser (@RequestBody UserDTO userDTO){
			

		//생일을 가져와서 string으로 변환 -> "-" 제거하고 나이-올해연도로 나이구해서 저장해서 넣어봅시다
	//	String dateStr = FormatSTR.format(userDTO.getBirthDate()); //연도 str으로 변환 
//		int birthyear = Integer.parseInt(dateStr.substring(0, 4)); //연도까지 자른거 
//		log.info("birthStr= {}, birthdate= {}" , dateStr, birthyear );  
		
		String birthyearSTR = (userDTO.getBirthDate()).toString();
		int birthyear =  Integer.parseInt(birthyearSTR.substring(0, 4));
		int age = (year-birthyear);
		try {
			log.info("post 요청받음");
			log.info("userDTO {}" , userDTO);
			log.info("age {} ", age);

			UserEntity user = UserEntity.builder() //요청을 이용해 저장할 사용자 (userEntity에 넣어주는듯 => 나중에 dto로 변환해서 전달)
					
					//userDTO에 들어있는 정보를 user에 set해줄거
					
					.email(userDTO.getEmail())
			        .name(userDTO.getName())
			        .birthDate(userDTO.getBirthDate())
			        .password(userDTO.getPassword())
			        .loginId(userDTO.getLoginId())
			        .gender(userDTO.getGender())
			        .age(age)
			        .userStatus(userDTO.getUserStatus())
			        .phoneNum(userDTO.getPhoneNum())
					.build();
		
			        //서비스를 이용해 리파지토리에 사용자 저장 (회원가입) : 빈값체크, 비밀번호 체크 하고 회원가입 이루어짐 
					UserEntity registeredUser = userService.create(user);  
					
					//회원가입된 회원의 정보를 responseUserDTO에 담아 보내서  클라이언트한테 반환할거임 
					UserDTO responseUserDTO = userDTO.builder() //builder사용하면 setter생성을 반지하고, 불변객체로 만듦
							.email(registeredUser.getEmail())
							.loginId(registeredUser.getLoginId())
							.password(registeredUser.getPassword())
							.gender(registeredUser.getGender())
							.age(registeredUser.getAge())
							.phoneNum(registeredUser.getPhoneNum())
							.userStatus(registeredUser.getUserStatus())
							.birthDate(registeredUser.getBirthDate())
							.name(registeredUser.getName())
							.build();
							
//					        return responseUserDTO;
							return ResponseEntity.ok().body(responseUserDTO);
			
						}catch (Exception e) { 
							//사용자 정보는 항상 하나이므로 리스트로 만들어야하는 responseDTO
							//사용하지 않고, 바로 userDTO로 리턴
							
							//애러가 발생한다면 
							ResponseDTO responseDTO = ResponseDTO.builder().error(e.getMessage()).build();
							
							return ResponseEntity.badRequest().body(responseDTO);
							
//							UserDTO userDTO1 = new UserDTO();
//							return userDTO1;
						}

						}
	
//						@PostMapping("/login")
//						public ResponseEntity<?> login(@RequestBody UserDTO userDTO){
//							UserEntity user = userService.getByCredentials(userDTO.getLoginId(), userDTO.getPassword());
//							
//						}

					}


	

					
	
				
