package com.example.makeMate.Entity;

import java.sql.Date;
import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name="user_info")


public class UserEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator ="user_seq")
	@SequenceGenerator(name = "user_seq",sequenceName = "USER_SEQ",initialValue = 1, allocationSize = 1)
	private long id;
	
	@Column(name = "email", nullable = false)
	private String email; 
	
	@Column(name = "loginid", nullable = false)
	private String loginId; 
	
	@Column(name = "password", nullable = false)
	private String password;
	
	@Column(name = "name", nullable = false)
	private String name;
	
	@Column(name = "age", nullable = false)
	private int age;
	
	@Column(name = "gender", nullable = false)
	private int gender;
	
	@Column(name = "birthdate", nullable = false)
	private Date birthDate;
	
	@Column(name = "profile_path", nullable = false)
	private String profile_path;
	
	// @NotBlank(message = "휴대폰 번호를 입력해주세요.")
	//@Pattern(regexp = "(01[016789])(\\d{3,4})(\\d{4})", message = "올바른 휴대폰 번호를 입력해주세요.")
	@Column(name = "phoneNum", nullable = false)
	private String phoneNum;
	
	@Column(nullable = false)
	private int user_status;

}
