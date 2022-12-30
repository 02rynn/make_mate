package com.example.makeMate.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.makeMate.Entity.UserEntity;
import com.example.makeMate.Repository.UserRepository;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class UserService { //데이터베이스에 저장된 사용자를 가지고 올 때 사용 
	
	@Autowired
	private UserRepository userRepository;
	
	// 회원가입메소드 
	public UserEntity create(final UserEntity userEntity) { //요청에 대한 응답을 Entity에 담을 거임
		
		if(userEntity == null || userEntity.getEmail() == null || userEntity.getLoginId() == null) {
			
			//서비스를 할 때, 유저정보가 없거나, email, 로그인 id가 없다면 => 유효하지 않은 유저
			throw new RuntimeException("Invalid arguments");
		}
		
		final String email = userEntity.getEmail();
		final String loginId = userEntity.getLoginId();
		final String password = userEntity.getPassword();
		final String passwordCheck = userEntity.getPasswordCheck();
		
		
		//LOGINID, EMAIL 중복검사 
		if(userRepository.existsByLoginId(loginId)!= null) {
			
			log.warn("loginId already exists {}" , loginId);
			throw new RuntimeException("loginId already exists");
			
		}
		
		if(userRepository.existsByEmail(email) != null) {
			log.warn("email already exists {}" , email);
			throw new RuntimeException("email already exists");
		}
		
		//비밀번호, 확인비밀번호 일치 확인 
		if(userEntity.getPassword() != userEntity.getPasswordCheck()) {
			log.warn("비밀번호가 일치하지 않습니다 {} , {}" , password, passwordCheck);
			throw new RuntimeException("비밀번호가 일치하지 않습니다.");
		}
		
		return userRepository.save(userEntity); //이미 존재하지 않는 회원이면 회원가입 시키겟다
	}
	
	
	//로그인메소드 
	public UserEntity getByCredentials(final String email, final String password) {
		return userRepository.findByEmailAndPassword(email, password);
	}

}
