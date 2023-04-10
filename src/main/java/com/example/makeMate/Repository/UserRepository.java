package com.example.makeMate.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.makeMate.Entity.LoginForm;
import com.example.makeMate.Entity.UserEntity;

import jakarta.transaction.Transactional;

//@EnableJpaRepositories
@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> { //entity와 id로 지정한 변수의 타입
//레파지토리는 JpaRepository라는 인터페이스를 통해 확장됨. <테이블에 맵핑되는 Entity, Entity기본키의 타입 >

	
	
	@Query(value="SELECT * FROM USER_INFO WHERE LOGINID = ?1",nativeQuery = true)
		UserEntity findByloginId(String loginId);
		
		
		
		UserEntity findByEmail(@Param("email") String email);

		
//		UserEntity findByloginId(String loginId);
		UserEntity findByLoginIdAndPassword(String loginId, String password);
		
		List<UserEntity> findAll();
		
		//회원가입
		@Modifying
		UserEntity save(UserEntity user);
		
		@Query(value="SELECT email FROM USER_INFO WHERE EMAIL= ?1",nativeQuery = true)
		String existsByEmail(String email);
		
		//로그인 아이디 중복확인
		@Query(value="select LOGINID from user_info where LoginId = ?1",  nativeQuery = true)
		String findLogin_idById(String loginId);
		
		//회원가입 아이디 중복확인
		@Query(value="SELECT LOGINID FROM USER_INFO WHERE LOGINID= ?1",nativeQuery = true)
		String existsByLoginId(String loginId);
		
		
//		@Query(value="select LOGIN_ID from user_info where loginid = ?1",  nativeQuery = true)
//		String findLogin_idById(int id);

//		UserEntity findByLoginIdAndPassword(String loginId, String password);
		
		
		//@Query(value="SELECT PULLPATH FROM USERIMAGE WHERE ID=()",nativeQuery = true)
		

		//비밀번호 변경
		@Modifying
		@Transactional
		@Query(value="update user_info set password=?1 where loginId = ?2",nativeQuery = true)
		public void update_password(String password, String loginId);
		
		//이메일 변경 -> 비밀번호 찾기
		@Query(value="select password from user_info where LoginId = ?1",  nativeQuery = true)
		String findPasswordById(String loginId);
		
		//이메일 변경 -> 이메일 찾기
		@Query(value="select email from user_info where loginId= ?1",nativeQuery = true)
		String findEmailbyLoginId(String loginId);
		
		//이메일 변경
		@Modifying
		@Transactional
		@Query(value="update user_info set email=?1 where loginId = ?2",nativeQuery = true)
		public void update_email(String email, String loginId);
		
		//회원탈퇴
		@Modifying
		@Transactional
		@Query(value="delete from user_info where loginId = ?1",nativeQuery = true)
		public void deleteByLoginId(String loginId);
		
		
		@Modifying
		//@Transactional
		@Query(value="update user_info set user_status=1 where loginId = ?1",nativeQuery = true)
		public int update_status(String loginId);
	
}
