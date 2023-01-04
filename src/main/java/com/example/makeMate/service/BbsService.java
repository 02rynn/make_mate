package com.example.makeMate.service;

import java.util.List;
import java.util.Objects;

import org.springframework.stereotype.Service;

import com.example.makeMate.DTO.param.BbsCountParam;
import com.example.makeMate.DTO.param.BbsListParam;
import com.example.makeMate.DTO.param.CreateBbsAnswerParam;
import com.example.makeMate.DTO.param.CreateBbsParam;
import com.example.makeMate.DTO.param.CreateReadCountParam;
import com.example.makeMate.DTO.param.UpdateBbsParam;
import com.example.makeMate.DTO.request.BbsListRequest;
import com.example.makeMate.DTO.request.CreateBbsRequest;
import com.example.makeMate.DTO.request.UpdateBbsRequest;
import com.example.makeMate.DTO.response.BbsListResponse;
import com.example.makeMate.DTO.response.BbsResponse;
import com.example.makeMate.DTO.response.CreateBbsResponse;
import com.example.makeMate.DTO.response.DeleteBbsResponse;
import com.example.makeMate.DTO.response.UpdateBbsResponse;
import com.example.makeMate.Entity.Bbs;
import com.example.makeMate.Repository.BoardRepository;

import jakarta.transaction.Transactional;






@Service
@Transactional
public class BbsService {

	private final BoardRepository repository;

	public BbsService(BoardRepository repository) {
		this.repository = repository;
	}

	/* 게시글 조회 */
	public BbsListResponse getBbsList(BbsListRequest req) {
		BbsListParam param = new BbsListParam(req);
		param.setPageParam(req.getPage(), 10);

		List<Bbs> bbsList = repository.getBbsSearchPageList(param);
		int pageCnt = repository.getBbsCount(new BbsCountParam(req));

		return new BbsListResponse(bbsList, pageCnt);
	}

	/* 특정 글 */
	/* 조회수 수정 */
	public BbsResponse getBbs(Integer seq, String readerId) {
		// 로그인 한 사용자의 조회수만 카운팅
		if (!readerId.isEmpty()) {
			CreateReadCountParam param = new CreateReadCountParam(seq, readerId);
			Integer result = repository.createBbsReadCountHistory(param); // 조회수 히스토리 처리 (insert: 1, update: 2)
			if (result == 1) {
				Integer updatedRecordCount = repository.increaseBbsReadCount(seq); // 조회수 증가
			}
		}

		return new BbsResponse(repository.getBbs(seq));
	}

	/* 글 추가 */
	public CreateBbsResponse createBbs(CreateBbsRequest req) {
		CreateBbsParam param = new CreateBbsParam(req);
		repository.createBbs(param);
		return new CreateBbsResponse(param.getSeq());
	}

	/* 답글 추가 */
	public CreateBbsResponse createBbsAnswer(Integer parentSeq, CreateBbsRequest req) {
		Integer updatedRecordCount = repository.updateBbsStep(parentSeq);
		Integer bbsAnswerCount = repository.getBbsAnswerCount(parentSeq);
		// TODO - 예외처리
		if (!Objects.equals(updatedRecordCount, bbsAnswerCount)) {
			System.out.println("BbsService createBbsAnswer: Fail update parent bbs step !!");
			return null;
		}

		CreateBbsAnswerParam param = new CreateBbsAnswerParam(parentSeq, req);
		repository.createBbsAnswer(param);
		return new CreateBbsResponse(param.getSeq());
	}

	/* 글 수정 */
	public UpdateBbsResponse updateBbs(Integer seq, UpdateBbsRequest req) {
		Integer updatedRecordCount = repository.updateBbs(new UpdateBbsParam(seq, req));
		return new UpdateBbsResponse(updatedRecordCount);
	}

	/* 게시글 삭제 */
	public DeleteBbsResponse deleteBbs(Integer seq) {
		Integer deletedRecordCount = repository.deleteBbs(seq);
		return new DeleteBbsResponse(deletedRecordCount);
	}
}