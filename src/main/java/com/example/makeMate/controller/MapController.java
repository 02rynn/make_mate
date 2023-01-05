package com.example.makeMate.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.makeMate.Entity.MapEntity;
import com.example.makeMate.service.MapService;

import lombok.AllArgsConstructor;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@AllArgsConstructor
public class MapController {
	private final MapService mapService;
	
	@GetMapping(value = "/mapinfo")
	public List<MapEntity> getUserList(){
		return mapService.getUserList();
	}
	
}
