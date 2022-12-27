package com.example.makeMate.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.makeMate.Entity.UserEntity;
import com.example.makeMate.Repository.UserRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class UserService { //데이터베이스에 저장된 사용자를 가지고 올 때 사용 
	
	@Autowired
	private UserRepository userRepository;
	
	public UserEntity create(final UserEntity userEntity) { //요청에 대한 응답을 Entity에 담을 거임
		
		if(userEntity == null || userEntity.getEmail() == null || userEntity.getLoginId() == null) {
			
			//서비스를 할 때, 유저정보가 없거나, email, 로그인 id가 없다면 => 유효하지 않은 유저
			throw new RuntimeException("Invalid arguments");
		}
		
		final String email = userEntity.getEmail();
		final String loginId = userEntity.getLoginId();

		if(userRepository.existByEmail(email)) {
			log.warn("Email already exists {}" , email);
			throw new RuntimeException("Email already exists");
			
		}
		
		if(userRepository.existByEmail(loginId)) {
			log.warn("LoginId already exists {}" , loginId);
			throw new RuntimeException("LoginId already exists");
		}
		
		return userRepository.save(userEntity); //이미 존재하지 않는 회원이면 회원가입 시키겟다
	}
	
	public UserEntity getByCredentials(final String email, final String password) {
		return userRepository.findByEmailAndPassword(email, password);
	}

}
