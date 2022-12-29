package com.example.makeMate.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.makeMate.DTO.UserDTO;
import com.example.makeMate.Entity.ImageEntity;
import com.example.makeMate.service.UserService;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
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

//	@PostMapping("/upload")
//	public String profile_upload (@RequestBody ImageEntity image) {
//		log.info("프로필 사진 post 요청");
//		log.info("ImageEntity {}" , image);
//		//레파지토리에 저장하기 전에 빈 객체 하나 만들고 셋하고 ~ 다 처리 하고 저장 
//		
//		if(image.isEmpty()) {
//		return null;
//	}
//	
//	String orgFileName = image.getOriginalFilename(); //일단 사용자의 이름
//	String realFileName = getRealFileName(orgFileName); //우리가 랜덤으로 지정해줄 이름
//		
//		
//		return "ok";
//	}
	
	@PostMapping("/signup")
//	public ResponseEntity<?> registerUser (@RequestBody UserDTO userDTO){
	public String registerUser (@RequestBody UserDTO userDTO){
			
		
		// 사용자 정보를  dto에다가 저장할거임 
		//try {
			log.info("post 요청받음");
			log.info("userDTO {}" , userDTO);
		//	log.info("fileItem {}" , userDTO.getProfilePath().getOriginalFilename());
			
			//파일 저장 -> UPLOAD파일 (저장파일명, 원래파일명 )로 바꿈
			//저장된 파일 정보를 가지고 관리해야하는 테이블에다가 저장해야함
			
			//DB에 저장하는 과정
//			FileItemDTO saveFileItem = new FileItemDTO();
//			String fileName = 
//			saveFileItem.setProfileImg(userDTO.getProfilePath().getOriginalFilename()); //saveFileItem 이걸로 db에 저장 title => 기본 테이블
			//UploadFile -> FIle 관리하는 테이블
			//UploadFile newFile = fileStore.saveFile(fileItem.getNewFile(userDTO.GET));
			
			
		//	log.info("saveFileItem {}", saveFileItem);
		//	if(!userDto.getNewFIle().isEmpty()) {
				
				//파일명 중복 막기 
//				String filename= useDTO.getNewFile().get오리지널파일네임();
//				String filePath = "D:\\files\\images\\" + userDTO.getNewFile().getOriginalFilename();
//				String uuid = UUID.randomUUID().toString();
				//점의 위치를 찾고 원래 있던 파일 네임에서 서브스트링으로 자르기
			//	String extension = filename.substring(filename.lastIndexOf("."));
				
//				filename = uuid + extension;
//				String filefullpath = filepath +filename;
//				userDTO.getNewFile().transferTo(new File(filePath));
				
			
			
//			UserEntity user = UserEntity.builder() //저장할 사용자 
//					.email(userDTO.getEmail())
//			        .name(userDTO.getName())
//			        .birthDate(userDTO.getBirthDate())
//			        .password(userDTO.getPassword())
//			        .loginId(userDTO.getLoginId())
//			        .gender(userDTO.getGender())
//			        .profilePath(userDTO.getProfilePath())
//			        .age(userDTO.getAge())
//			        .userStatus(userDTO.getUserStatus())
//			        .phoneNum(userDTO.getPhoneNum())
//					.build();
//					
//					//서비스를 이용해 리포지토리에 사용자 저장
//					UserEntity registeredUser = userService.create(user);
//					UserDTO responseUserDTO = userDTO.builder()
//							.email(registeredUser.getEmail())
//							.loginId(registeredUser.getLoginId())
//							.password(registeredUser.getPassword())
//							.gender(registeredUser.getGender())
//							.age(registeredUser.getAge())
//							.profilePath(registeredUser.getProfilePath())
//							.phoneNum(registeredUser.getPhoneNum())
//							.userStatus(registeredUser.getUserStatus())
//							.birthDate(registeredUser.getBirthDate())
//							.name(registeredUser.getName())
//							.build();
//							
//					return ResponseEntity.ok().body(responseUserDTO);
//			
//						}catch (Exception e) { 
//							//사용자 정보는 항상 하나이므로 리스트로 만들어야하는 responseDTO
//							//사용하지 않고, 바로 userDTO로 리턴
//							
//							ResponseDTO responseDTO = ResponseDTO.builder().error(e.getMessage()).build();
//						return ResponseEntity
//									.badRequest()
//									.body(responseDTO);
			return "ok";
						}
					}
	
	
	
				
