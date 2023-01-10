package com.example.makeMate.controller;

import java.time.LocalDate;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.makeMate.DTO.EmailDTO;
import com.example.makeMate.DTO.PasswordDTO;
import com.example.makeMate.DTO.ResponseDTO;
import com.example.makeMate.DTO.UserDTO;
import com.example.makeMate.Entity.LoginForm;
import com.example.makeMate.Entity.UserEntity;
import com.example.makeMate.Repository.UserRepository;
import com.example.makeMate.service.UserService;
import com.example.makeMate.session.SessionManager;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
public class UserController {

	@Autowired
	private UserService userService;
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private  SessionManager sessionManager;
	
	public static final String SESSION_COOKIE_NAME = "tempSessionId";
	

	LocalDate now = LocalDate.now();
	int year = now.getYear(); // 올해 연도
//   
//	SimpleDateFormat FormatSTR = new SimpleDateFormat("yyyy/MM/dd");

	@PostMapping("/signup")
//	public UserDTO registerUser (@RequestBody UserDTO userDTO){ //요청받은 정보를 회원가입메소드(create)에 넣고 이걸 userDTO에 넣어서 반환
	public ResponseEntity<?> registerUser(@RequestBody UserDTO userDTO) {

		// 생일을 가져와서 string으로 변환 -> "-" 제거하고 나이-올해연도로 나이구해서 저장해서 넣어봅시다
		// String dateStr = FormatSTR.format(userDTO.getBirthDate()); //연도 str으로 변환
//		int birthyear = Integer.parseInt(dateStr.substring(0, 4)); //연도까지 자른거 
//		log.info("birthStr= {}, birthdate= {}" , dateStr, birthyear );  

		String birthyearSTR = (userDTO.getBirthDate()).toString();
		int birthyear = Integer.parseInt(birthyearSTR.substring(0, 4));
		int age = (year - birthyear) + 1;
		try {
			log.info("post 요청받음");
			log.info("userDTO {}", userDTO);
			log.info("age {} ", age);

			UserEntity user = UserEntity.builder() // 요청을 이용해 저장할 사용자 (userEntity에 넣어주는듯 => 나중에 dto로 변환해서 전달)
					// userDTO에 들어있는 정보를 user에 set해줄거
					.id(0).email(userDTO.getEmail())
					.name(userDTO.getName())
					.birthDate(userDTO.getBirthDate())
					.password(userDTO.getPassword())
					.passwordCheck(userDTO.getPasswordCheck())
					.loginId(userDTO.getLoginId())
					.gender(userDTO.getGender())
					.age(age)
					.userStatus(userDTO.getUserStatus())
					.phoneNum(userDTO.getPhoneNum())
					.build();

			// 서비스를 이용해 리파지토리에 사용자 저장 (회원가입) : 빈값체크, 비밀번호 체크 하고 회원가입 이루어짐
			UserEntity registeredUser = userService.create(user);
			log.info("회원가입 완료", registeredUser);

			// 회원가입된 회원의 정보를 responseUserDTO에 담아 보내서 클라이언트한테 반환할거임
			UserDTO responseUserDTO = userDTO.builder() // builder사용하면 setter생성을 반지하고, 불변객체로 만듦
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

		} catch (Exception e) {
			// 사용자 정보는 항상 하나이므로 리스트로 만들어야하는 responseDTO
			// 사용하지 않고, 바로 userDTO로 리턴
			log.error("error {}", e.getMessage());

			// 애러가 발생한다면
			ResponseDTO responseDTO = ResponseDTO.builder().error(e.getMessage()).build();

			return ResponseEntity.badRequest().body(responseDTO);

//							UserDTO userDTO1 = new UserDTO();
//							return userDTO1;
		}

	}

	@PostMapping("/login")
	public UserEntity login(@RequestBody LoginForm loginForm
								,HttpServletRequest req
								,HttpServletResponse resp
							) {
//	public ResponseEntity<?> login(@ModelAttribute LoginForm loginForm) {
		log.info("login user: {},{}",loginForm.getLoginId(),loginForm.getPassword());
		
		UserEntity entity = userRepository.findByloginId(loginForm.getLoginId());
//		
		if(entity != null) {
			
			log.info("유저정보 {}",entity.toString());
		}
		
		if(entity != null) {
			if(entity.getPassword().equals(loginForm.getPassword())) { 
				HttpSession session = req.getSession(); 
				session.setMaxInactiveInterval(1800);
				session.setAttribute("user_name", entity);
				session.getAttribute("user_name");
				log.info("로그인완료 {}" ,	session.getAttribute("user_name"));
				
				resp.addCookie(new Cookie(SESSION_COOKIE_NAME, entity.getLoginId()));
				return entity;
			} else {
			
				
				log.error("비밀번호 혹은 아이디가 일치하지 않습니다.");
		}
			
		}
		return new UserEntity(); 
		
	}
	
@PostMapping("/signup/checkId")
@ResponseBody      //여기로 정보 요청 ->보낸 아이디값과 일치하는 값이 있나요? -> 1 => 사용 가능한 아이디 
public int checkId(@RequestBody String loginId) { 
	
	log.info("중복체크 요청 아이디dfd: {}", loginId);
	log.info("중복체크 요청 아이디: {}", userRepository.existsByLoginId(loginId) );
	
	if(userRepository.existsByLoginId(loginId) == null) { //사용가능한 아이디 
		
		return 1;
	}else {
		
		return 0;
	}
	
}


//@PostMapping("/signup/emailConfirm")
//public String emailConfirm(@RequestBody String email) throws Exception {
//
//	log.info(email);
//  String confirm = emailService.sendSimpleMessage(email);
//  log.info(confirm);
//  return confirm;
//}


@GetMapping("/yourpage/{loginId}")
public String findMyPage(@PathVariable("loginId") String loginId) {
	return "LoginId: " + loginId; 
 }


//비밀번호 변경
@PostMapping("/mypage/password")
@ResponseBody     
public void update_password(@RequestBody PasswordDTO passwordDTO
							,@RequestParam String loginId) { 
	log.info("기존비번 {}, 비번체크 {}, 새비번{}, 아이디{}" ,passwordDTO.getOldPassword()
													,passwordDTO.getPasswordCheck()
													,passwordDTO.getNewPassword()
													, loginId);
	
	//기존비밀번호랑 같으면 안됨 
	if(passwordDTO.getOldPassword()==passwordDTO.getNewPassword()) {
		log.warn("기존 비밀번호와 새 비밀번호가 일치합니다 {} , {}" ,passwordDTO.getOldPassword(), passwordDTO.getNewPassword());
		throw new RuntimeException("기존 비밀번호와 새 비밀번호가 일치합니다");
	}
	
	//비밀번호 확인
	if(! passwordDTO.getNewPassword().equals(passwordDTO.getPasswordCheck())) { 
		log.warn("비밀번호가 확인비밀번호와 일치하지 않습니다 {} , {}" , passwordDTO.getNewPassword(), passwordDTO.getPasswordCheck());
		throw new RuntimeException("password is not same");
	}
	
	//새로운 비밀번호 업데이트
	userRepository.update_password(passwordDTO.getNewPassword(),loginId);
	
	
	}

@PostMapping("/mypage/email")
@ResponseBody     
public void update_email(@RequestBody EmailDTO emailDTO
							,@RequestParam String loginId) { 
	log.info("새 이메일 {}, 비밀번호 {} 로그인 아이디{}" ,emailDTO.getNewEmail()
													,emailDTO.getPassword()
													, loginId);
	//이메일이 기존이메일과 일치하면 안됨
	String email = userRepository.findEmailbyLoginId(loginId);
	if(email.equals(emailDTO.getNewEmail())) {
		log.warn("기존 이메일과 동일합니다 기존 {} , 새이멜{}" , email,emailDTO.getNewEmail());
		throw new RuntimeException("email is same");
	}
	
	//비밀번호가 해당 계정의 비밀번호와 일치
	String password = userRepository.findPasswordById(loginId);
	if(!password.equals(emailDTO.getPassword())) {
		log.warn("비밀번호가 일치하지 않습니다 {} , {}" , password, emailDTO.getPassword());
		throw new RuntimeException("password is not same");
	}
	
	
	//이메일 업데이트 
	userRepository.update_email(emailDTO.getNewEmail(), loginId);
	
	}



@PostMapping("/mypage/withdrawal")
@ResponseBody     
public void delete_user(@RequestBody Map<String, Object> asd) { 
	String password = (String) asd.get("password");
	String loginId = (String) asd.get("loginId");
	log.info("로그인정보ㄴㅇㄹㄴㅇㄹ: {}, {}" ,password, loginId);
	
	//비밀번호가 해당 계정의 비밀번호와 일치
	String password1 = userRepository.findPasswordById(loginId);
	log.info("db에 저장된 비번{}",password1);
	
	if(!password.equals(password1)) {
		log.warn("비밀번호가 일치하지 않습니다 {} , {}" , password, password1);
		throw new RuntimeException("password is not same");
	}
	//유저삭제
	userRepository.deleteByLoginId(loginId);
	
	
	}


	
	
//	@PostMapping("/login")
//	public ResponseEntity<?> login(@RequestBody UserDTO userDTO){
//		UserEntity user = userService.getByCredentials(userDTO.getLoginId(), userDTO.getPassword());
//		
//		if(user != null) {
//			final UserDTO responseDTO = UserDTO.builder()
//					.password(user.getPassword())
//					.id(user.getId())
//					.build();
//			return ResponseEntity.ok().body(responseDTO);
//		} else {
//			ResponseDTO responseDTO = ResponseDTO.builder()
//					.error("Login falied.")
//					.build();
//			return ResponseEntity.badRequest().body(responseDTO);
//								
//		}
	//}

}
