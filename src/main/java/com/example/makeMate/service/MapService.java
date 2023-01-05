package com.example.makeMate.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.makeMate.Entity.MapEntity;
import com.example.makeMate.Repository.MapRepository;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class MapService {
	private MapRepository mapRepository;
	
	public List<MapEntity> getUserList() {
		return mapRepository.findAll();
	}
}
