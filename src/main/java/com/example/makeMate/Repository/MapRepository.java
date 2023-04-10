package com.example.makeMate.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.makeMate.Entity.MapEntity;

public interface MapRepository extends JpaRepository<MapEntity,Long> {
	
	
}
