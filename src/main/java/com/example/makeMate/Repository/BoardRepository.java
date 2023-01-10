package com.example.makeMate.Repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.example.makeMate.Entity.Board;

import java.util.List;

//jpa를 사용할수 있게 해주는 공통 인터페이스
public interface BoardRepository extends JpaRepository<Board, Integer> {


	@Query(value="select * from board where CATEGORYCODE = ?1",nativeQuery = true)
	public List<Board> findAllByCateGoryCode(String name);
	
	

	@Query(value="select * from board where author = ?1",nativeQuery = true)
	public List<Board> findAllByLoginId(String loginId);


	@Modifying
	@Query(value="update board set RECRUITMENT = 1 where no =?1", nativeQuery = true)
	public int checkMateBoard(int no);
	
	

	
}