package com.example.makeMate.DTO;

import java.time.LocalDate;

import lombok.Data;

@Data
public class UserDTO {
	private int id;
	private String email;
	private String password;
	private String name;
	private int age;
	private String address;
	private String nickName;
	private int gender;
	private LocalDate birthday;
	private String phone;
	private String profile_path;
	

}
