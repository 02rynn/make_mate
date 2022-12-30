package com.example.makeMate.Entity;

import org.springframework.context.annotation.Bean;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LoginForm {

		public String loginId;
		public String password;

}
