package com.example.makeMate.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.makeMate.Entity.Board;
import com.example.makeMate.Entity.CommentEntity;
import com.example.makeMate.Entity.ReviewEntity;

@Repository
public interface CommentRepository extends JpaRepository<CommentEntity, Long> {


	//댓글 인서트
	CommentEntity save(CommentEntity commentEntity);
	
	//댓글 수정
	@Modifying
	@Query(value="update comment_make set comment=?1 where commentId=?2",nativeQuery = true)
	public void update_comment(String comment, int commnetId);
	
	//댓글 삭제
	@Modifying
	@Query(value="delete from comment_make where commentId=?1",nativeQuery = true)
	public void delete_comment(int commentId);
	
	//내가 댓글 단 게시글  모르게씀...@@@@@
//	@Query(value="select b.no, b.title, b.contents from board b, (SELECT  DISTINCT no from comment_make where id=1) c where b.no = c.no")
//	public Board findBoardByComm(Long id);
//	
	//내가 쓴 댓글
	@Query(value="select * from comment_make where comment_writer = ?1",nativeQuery = true)
	public List<CommentEntity> findCommentByLoginId(String commentWriter);
	
	//댓글가져오기
	@Query(value = "select * from comment_make where no=?1",nativeQuery = true)
	public List<CommentEntity> findCommentByNo(int no);
}
