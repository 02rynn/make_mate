package com.example.makeMate.DTO;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PasswordDTO {
	
	private String oldPassword;
	private String passwordCheck;
	private String newPassword;

}
