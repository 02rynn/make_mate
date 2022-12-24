package com.example.makeMate.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.makeMate.Entity.UserEntity;

import jakarta.persistence.EntityManager;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> { //entity와 id로 지정한 변수의 타입
	
//	private final EntityManager em;
//	
//	public
	
	//select = findby를 사용해서 할 수 있음 
	
	UserEntity findByloginId(@Param("loginid") String loginid);
	
	List<UserEntity> findAll();
	
	UserEntity save(UserEntity user);
	
	
}
