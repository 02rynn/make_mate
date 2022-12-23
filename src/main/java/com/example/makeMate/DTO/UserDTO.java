package com.example.makeMate.DTO;

import java.time.LocalDate;

import lombok.Data;

@Data
public class UserDTO {
	private int id;
	private String email; 
	private String loginId; 
	private String password;
	private String name;
	private int age; 
	private String detail_address; 
	private int zipcode;
	private String nickName;
	private int gender; 
	private LocalDate birthDate; 
	//private String profile_path;
	

}
