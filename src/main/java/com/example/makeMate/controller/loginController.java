package com.example.makeMate.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.makeMate.DTO.UserDTO;
import com.example.makeMate.session.SessionManager;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequiredArgsConstructor
public class LoginController {
	
	private final SessionManager sessionManager;
	
	@GetMapping("/login")
	public String login(Model model) {
		UserDTO user = new UserDTO();
		model.addAttribute("loginForm", user);
		
		
		return "login/login";
	}
	
	
	@PostMapping("/login")
	public String login (@ModelAttribute UserDTO user
			,BindingResult bindingResult
			,HttpServletResponse resp
			,HttpServletRequest req 
			) {
		
		
		
		
		return "";

	}
}
