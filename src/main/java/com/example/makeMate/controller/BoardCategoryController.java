package com.example.makeMate.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.makeMate.Entity.BoardCategory;
import com.example.makeMate.Repository.BoardCategoryRepository;


@RestController
@RequestMapping("/category")
public class BoardCategoryController {

	@Autowired
	private BoardCategoryRepository repository;
	
    @GetMapping("/ss")
    public List<BoardCategory> selectCategory(){
 
    	
        System.out.println(repository.findAllCategory());
        return repository.findAllCategory();
    }
    
}
