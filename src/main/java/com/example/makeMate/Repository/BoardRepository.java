package com.example.makeMate.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.makeMate.DTO.param.BbsCountParam;
import com.example.makeMate.DTO.param.BbsListParam;
import com.example.makeMate.DTO.param.CreateBbsAnswerParam;
import com.example.makeMate.DTO.param.CreateBbsParam;
import com.example.makeMate.DTO.param.CreateReadCountParam;
import com.example.makeMate.DTO.param.UpdateBbsParam;
import com.example.makeMate.Entity.Bbs;



@Repository
public interface BoardRepository extends JpaRepository<Bbs, String>{
	
	List<Bbs> getBbsSearchPageList(BbsListParam param);
	Integer getBbsCount(BbsCountParam param);

	Bbs getBbs(Integer seq);
	Integer createBbsReadCountHistory(CreateReadCountParam param);
	Integer increaseBbsReadCount(Integer seq);

	void createBbs(CreateBbsParam param);

	Integer updateBbsStep(Integer parentSeq);
	Integer getBbsAnswerCount(Integer parentSeq);
	void createBbsAnswer(CreateBbsAnswerParam param);

	Integer updateBbs(UpdateBbsParam param);

	Integer deleteBbs(Integer seq);
}
