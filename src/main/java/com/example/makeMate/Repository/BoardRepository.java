package com.example.makeMate.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.makeMate.Entity.BoardEntity;

@Repository
public interface BoardRepository extends JpaRepository<BoardEntity, String>{
	List<BoardEntity> findByUserId(String userId);
}
