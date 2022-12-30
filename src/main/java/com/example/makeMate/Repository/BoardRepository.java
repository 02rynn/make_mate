<<<<<<< HEAD
package com.example.makeMate.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.makeMate.Entity.BoardEntity;



@Repository
public interface BoardRepository extends JpaRepository<BoardEntity, String>{
	
	List<BoardEntity> findByBoardIdx(String boardIdx);
}
=======
//package com.example.makeMate.Repository;
//
//import java.util.List;
//
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.stereotype.Repository;
//
//import com.example.makeMate.Entity.BoardEntity;
//
//
//
//@Repository
//public interface BoardRepository extends JpaRepository<BoardEntity, String>{
//	List<BoardEntity> findByUserId(String userId);
//	
//	
//
//	
//	
//}
>>>>>>> 6c11bd88f51561c39fff52a25d6bed59b4a9f75a
