package com.example.makeMate.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.makeMate.Entity.BoardCategory;

@Repository
public interface BoardCategoryRepository extends JpaRepository<BoardCategory, Long> {

	
	public BoardCategory save(BoardCategory entity);
	
	@Query(value="select * from board_category",nativeQuery = true)
	public List<BoardCategory> findAllCategory();
	
	
	@Modifying
	@Query(value="DELETE FROM board_category WHERE categorycode =?1",nativeQuery = true)
	public int deleteCategory(String category);
	
}
