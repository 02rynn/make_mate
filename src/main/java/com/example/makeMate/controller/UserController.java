package com.example.makeMate.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;

import com.example.makeMate.DTO.ResponseDTO;
import com.example.makeMate.DTO.UserDTO;
import com.example.makeMate.Entity.UserEntity;
import com.example.makeMate.service.UserService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
public class UserController {

	@Autowired
	private UserService userService;

	//public UserEntity insert_user ( @RequestBody(required = false) String user_info) {
//	public String insert_user ( HttpServletRequest req) {
//	public String insert_user(MultipartRequest req) {
//	
//	@PostMapping("/signup")
//	public String insert_user(	@RequestPart (value="values", required=false) String user_info) {
//		return null;
//	}
		//@RequestPart(value="file", required=true) MultipartFile file) {
			//MultipartRequest req, @RequestPart(value="file", required=false) MultipartFile file) {
			


//		log.info("req {}", req);
//		log.info("post요청 들어옴");
	//	log.info("user {}", user_info);
		//log.info("file {}", file);
		//UserEntity user = new UserEntity();
		
//		MultipartFile inputFile = req.getFile("values");
//		log.info("inputFile {}", inputFile);
	
 
	//	LocalDate now = LocalDate.now();
		//JSONParser parser = new JSONParser();
	//	try {
			//Files.copy(inputFile.getInputStream(), Path.of("D:\\files\\images\\"+inputFile.getOriginalFilename()), StandardCopyOption.REPLACE_EXISTING);

        	//JSONObject jsonObject = (JSONObject) parser.parse(user_info);
			// user.setName((String)jsonObject.get("name"));
			// user.setBirthDate((Date)jsonObject.get("birthDate"));
			// 나이 구해서 저장하기
//        	int year=  now.getYear(); // 올해 연도 
//        	SimpleDateFormat FormatSTR = new SimpleDateFormat("yyyy-MM-dd");
//        	String dateStr = FormatSTR.format(((Date)jsonObject.get("birthDate"))); //연도 str으로 변환 
//        	int birthyear = Integer.parseInt(dateStr.substring(0, 4)); //연도까지 자른거 
//        	log.info("birthStr= {}, birthdate= {}" , dateStr, birthyear );  

//			 int birth = Integer.parseInt((
//			 ((Date)jsonObject.get("birthDate")).toString()).substring(0,4));
//			 int age = (birthyear-year);
//			 user.setAge(age);

//            user.setEmail((String)jsonObject.get("email"));
//            user.setGender((Integer)jsonObject.get("gender"));
//            user.setLoginId((String)jsonObject.get("loginId"));
//            user.setName((String)jsonObject.get("name"));
//            user.setPassword((String)jsonObject.get("password"));
//            user.setPhoneNum((String)jsonObject.get("phoneNum"));
//            user.setProfile_path((String)jsonObject.get("profile_path"));
           // user.setUser_status(1);

			// userRepository.save(user);

		//} catch (Exception e) {
//        } catch (ParseException e) {
			
			//e.printStackTrace();
		//}
	
		
		
		//아이디랑 닉네임 중복확인
		//프론트에서 걸었던 조건에 모두 해당하면 => loginservice 실행되도록
		
		//return user;
	//}
	
	
//	@GetMapping("/check/loginId/{loginId}")
//	public 
	
	
	
	@PostMapping("/signup")
	public ResponseEntity<?> registerUser (@RequestBody UserDTO userDTO){
		// 사용자 정보를  dto에다가 저장할거임 
		try {
			
			UserEntity user = UserEntity.builder() //저장할 사용자 
					.email(userDTO.getEmail())
			        .name(userDTO.getName())
			        .birthDate(userDTO.getBirthDate())
			        .password(userDTO.getPassword())
			        .loginId(userDTO.getLoginId())
			        .gender(userDTO.getGender())
			        .profile_path(userDTO.getProfile_path())
			        .age(userDTO.getAge())
			        .user_status(userDTO.getUser_status())
			        .phoneNum(userDTO.getPhoneNum())
					.build();
					
					//서비스를 이용해 리포지토리에 사용자 저장
					UserEntity registeredUser = userService.create(user);
					UserDTO responseUserDTO = userDTO.builder()
							.email(registeredUser.getEmail())
							.loginId(registeredUser.getLoginId())
							.password(registeredUser.getPassword())
							.gender(registeredUser.getGender())
							.age(registeredUser.getAge())
							.profile_path(registeredUser.getProfile_path())
							.phoneNum(registeredUser.getPhoneNum())
							.user_status(registeredUser.getUser_status())
							.birthDate(registeredUser.getBirthDate())
							.name(registeredUser.getName())
							.build();
							
							return ResponseEntity.ok().body(responseUserDTO);
			
						}catch (Exception e) { 
							//사용자 정보는 항상 하나이므로 리스트로 만들어야하는 responseDTO
							//사용하지 않고, 바로 userDTO로 리턴
							
							ResponseDTO responseDTO = ResponseDTO.builder().error(e.getMessage()).build();
							return ResponseEntity
									.badRequest()
									.body(responseDTO);
						}
					}
	
	
	
				}
