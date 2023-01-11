package com.example.makeMate.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.makeMate.Entity.BoardCategory;
import com.example.makeMate.Repository.BoardCategoryRepository;

import jakarta.transaction.Transactional;


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
    
    @Transactional
    @PostMapping("/delete/{category}")
    public int deleteCategory(@PathVariable String category){
 
    	
        
        return repository.deleteCategory(category);
    }
    

    @PostMapping("/insert/{categoryName}/{categoryCode}")
    public BoardCategory insetCategory(@PathVariable String categoryName,@PathVariable String categoryCode){
 
    	BoardCategory entity = new BoardCategory();
    	entity.setCategoryCode(categoryCode);
    	entity.setCategoryName(categoryName);
    	
        
        return repository.save(entity);
    }
}
