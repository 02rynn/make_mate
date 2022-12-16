
package com.example.makeMate.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.makeMate.service.boardService;

@RestController
@RequestMapping


public class BoardController {

@Autowired

public boardService service;
	
	
	
}
