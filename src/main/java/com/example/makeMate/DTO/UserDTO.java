package com.example.makeMate.DTO;


import java.sql.Date;



import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@Builder
@AllArgsConstructor

public class UserDTO {

	//@id
	private long id;
	private String email; 
	private String loginId; 
	private String password;
	private String passwordCheck;
	private String name;
	private int age; 
	private int gender; 
	private String birthDate; 
	private String phoneNum;
	private int userStatus;
	

}
