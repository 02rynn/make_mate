package com.example.makeMate.Repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.makeMate.Entity.Message;
import com.example.makeMate.Entity.ReviewEntity;

@Repository
public interface ReveiewRepository extends JpaRepository<ReviewEntity, Long> {
	
	
	//리뷰 인서트
	ReviewEntity save(ReviewEntity reviewEntity);

	//전체 리뷰 가지고 오기
	List<ReviewEntity> findAll();
	
	//내가 쓴 리뷰
	@Query(value="select * from review_make where review_writer=?1",nativeQuery = true)
	List<ReviewEntity> findMyReview(String reviewWriter);
	
	//내가 받은 리뷰 (다른 사람이 나에게 쓴 리뷰)
	@Query(value="select * from review_make where review_Sender=?1",nativeQuery = true)
	List<ReviewEntity> findTheirReview(String reviewSender);
	
	//리뷰는 수정 삭제는 따로 필요 없을거같음
}
