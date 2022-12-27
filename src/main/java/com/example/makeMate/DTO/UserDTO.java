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
	private int id;
	private String email; 
	private String loginId; 
	private String password;
	private String name;
	private int age; 
	private int gender; 
	private Date birthDate; 
	private String profile_path;
	private String phoneNum;
	private int user_status;
	

}
