package com.example.makeMate.controller;


import java.sql.Date;
import java.time.LocalDate;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.makeMate.Entity.UserEntity;
import com.example.makeMate.Repository.UserRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController

public class UserController {
	
	@Autowired
	private UserRepository userRepository;
	
	//insert
	@ResponseBody
	@PostMapping("/signup")
	public String insert_user ( @RequestBody String user_info) {
		
		 LocalDate now = LocalDate.now();
		
		log.info("user {}", user_info);
		UserEntity user = new UserEntity();		
		log.info("post요청 들어옴");
		
        JSONParser parser = new JSONParser();
        try {
			
        	JSONObject jsonObject = (JSONObject) parser.parse(user_info);
        	user.setName((String)jsonObject.get("name"));
//        	user.setBirthDate((Date)jsonObject.get("birthDate"));
//        
               int birth  = Integer.parseInt(((String)jsonObject.get("birthDate")).substring(0,4));
               int year= now.getYear();
               int age = (birth-year);
               
               
               ///JsonParser가 작동을 안하는듯....?
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
               
               
        } catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
	}
        return "ok";
	
	

}
}
