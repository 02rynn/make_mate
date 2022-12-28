package com.example.makeMate.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.makeMate.Entity.UserEntity;


@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> { //entity와 id로 지정한 변수의 타입
	//레파지토리는 JpaRepository라는 인터페이스를 통해 확장됨. <테이블에 맵핑되는 Entity, Entity기본키의 타입 >
	

	
	UserEntity findByloginId(@Param("loginId") String loginId);
	UserEntity findByEmail(@Param("email") String email);
	
	List<UserEntity> findAll();
	
	UserEntity save(UserEntity user);
	
	Boolean existByEmail(String email);
	Boolean existByLoginId(String loginId);
	UserEntity findByEmailAndPassword(String email, String password);
	
}
