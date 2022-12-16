package com.example.makeMate.controller;

import java.util.Date;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletRequest;

@RestController
public class HelloWorldController {

    @GetMapping("/api/hello")
    public String test() {
        return "우리 5조 화이팅"+new Date()+"";
    }
    
    @GetMapping("/api/test")
    public String test2() {
    
    	
    	return "안녕하세요 임규진입니다";
    }
    
    
}