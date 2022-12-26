package com.example.makeMate.controller;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import java.sql.Date;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartRequest;

import com.example.makeMate.Entity.UserEntity;
import com.example.makeMate.Repository.UserRepository;

import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
public class UserController {

	@Autowired
	private UserRepository userRepository;

	// insert
//	@ResponseBody

	@PostMapping("/signup")
//	public String insert_user ( @RequestBody(required = false) String user_info) {
//	public String insert_user ( HttpServletRequest req) {
//	public String insert_user(MultipartRequest req) {
	public String insert_user(	@RequestPart(value="values", required=false) String user_info, 
//			@RequestPart(value="file", required=true) MultipartFile file) {
			MultipartRequest req, @RequestPart(value="file", required=false) MultipartFile file) {
			


		log.info("req {}", req);
		log.info("post요청 들어옴");
		log.info("user {}", user_info);
		log.info("file {}", file);
		UserEntity user = new UserEntity();
		
		MultipartFile inputFile = req.getFile("values");
		log.info("inputFile {}", inputFile);
	

		LocalDate now = LocalDate.now();
		JSONParser parser = new JSONParser();
		try {
			Files.copy(inputFile.getInputStream(), Path.of("D:\\files\\images\\"+inputFile.getOriginalFilename()), StandardCopyOption.REPLACE_EXISTING);

        	JSONObject jsonObject = (JSONObject) parser.parse(user_info);
			 user.setName((String)jsonObject.get("name"));
			 user.setBirthDate((Date)jsonObject.get("birthDate"));
			// 나이 구해서 저장하기
        	int year=  now.getYear(); // 올해 연도 
        	SimpleDateFormat FormatSTR = new SimpleDateFormat("yyyy-MM-dd");
        	String dateStr = FormatSTR.format(((Date)jsonObject.get("birthDate"))); //연도 str으로 변환 
        	int birthyear = Integer.parseInt(dateStr.substring(0, 4)); //연도까지 자른거 
        	log.info("birthStr= {}, birthdate= {}" , dateStr, birthyear );  

			 int birth = Integer.parseInt((
			 ((Date)jsonObject.get("birthDate")).toString()).substring(0,4));
			 int age = (birthyear-year);
			 user.setAge(age);

            user.setEmail((String)jsonObject.get("email"));
            user.setGender((Integer)jsonObject.get("gender"));
            user.setLoginId((String)jsonObject.get("loginId"));
            user.setName((String)jsonObject.get("name"));
            user.setPassword((String)jsonObject.get("password"));
            user.setPhoneNum((String)jsonObject.get("phoneNum"));
            user.setProfile_path((String)jsonObject.get("profile_path"));
            user.setUser_status(1);

			 userRepository.save(user);

		} catch (Exception e) {
//        } catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return "ok";

	}
	
	
	
	
	
	
}
