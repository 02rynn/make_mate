package com.example.makeMate.Entity;

import java.io.Serializable;
import java.sql.Date;

import org.springframework.web.multipart.MultipartFile;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
import jakarta.persistence.UniqueConstraint;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@NoArgsConstructor	
@AllArgsConstructor
@Table(name="USER_INFO" ,uniqueConstraints = @UniqueConstraint(columnNames = { "email", "loginId"}))
public class UserEntity implements Serializable{ //자바클래스를 Entity로 지정하고싶다면 @Entity, @생성자, @Data @Table 필수 
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator ="user_seq")
	@SequenceGenerator(name = "user_seq",sequenceName = "USER_SEQ",initialValue = 1, allocationSize = 1)
	private long id;
	
	@Column(name = "email",  unique = true)
	@Email(message = "이메일 형식을 맞춰주세요.")
	@NotNull(message="이메일을 입력해주세요")
	private String email; 
	
	@Column(name = "LOGINID", unique = true)
	@Pattern(regexp="[a-zA-Z1-9]{6,12}", message = "아이디는 영문자와 숫자조합으로 6-12글자 입니다,")
	@NotNull(message="아이디을 입력해주세요")
	private String loginId;
	
	@Column(name = "password")
	//@Pattern(regexp = "^[a-zA-Z\\d`~.!@#$%^&*()-_=+]{8,24}$", message = "비밀번호는 8~24자 영문 , 숫자, 특수문자를 사용하세요.")
	@NotNull(message="비밀번호를 입력해주세요")
	@Transient
	private String passwordCheck;
	
	
	@Column(name = "password")
	//@Pattern(regexp = "^[a-zA-Z\\d`~.!@#$%^&*()-_=+]{8,24}$", message = "비밀번호는 8~24자 영문 , 숫자, 특수문자를 사용하세요.")
	@NotNull(message="비밀번호를 입력해주세요")
	private String password;
	
	@Column(name = "name")
	@NotNull(message="아이디을 입력해주세요")
	//@Pattern(regexp="^[가-힣]{2,5}$", message = "이름은 2-5글자 사이의 한글입니다.")
	private String name;
	
	@Column(name = "age")
	@NotNull(message="아이디을 입력해주세요")
	private int age;
	
	@Column(name = "gender")
	@NotNull(message="성별을 입력해주세요")
	private int gender;
	
	@Column(name = "BIRTHDATE") 
	@NotNull(message="생년월일을 입력해주세요")
	private String birthDate;
	
	
	@Column(name = "PHONENUM")
	@NotNull(message="휴대번호를 입력해주세요")
//	@Pattern(regexp="^[0-9]{10,11}$", message = "휴대전화 번호는 숫자로 이뤄진 10-11자리 입니다")
	private String phoneNum;
	
	@Column(name="user_status")
	private int userStatus;

	
}
