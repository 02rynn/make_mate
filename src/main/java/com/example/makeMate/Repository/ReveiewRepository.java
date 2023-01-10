package com.example.makeMate.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.makeMate.Entity.Message;
import com.example.makeMate.Entity.ReviewEntity;

@Repository
public interface ReveiewRepository extends JpaRepository<ReviewEntity, Long> {
	
	

}
