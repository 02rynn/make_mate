package com.example.makeMate.Repository;



import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.makeMate.Entity.Board;



public interface BoardRepository extends JpaRepository<Board, Integer> {
	
	
	// select * from board order desc;
	List<Board> finaAllOrderByIdDesc();
	
	//insert into board(board_idx, board_name, board_ttl, board_cn, board_date)
   // values(nextval('board_seq'), #{param1}, #{param2}, #{param3}, now())

	Board save(Board board);
	
	
	
	


}
