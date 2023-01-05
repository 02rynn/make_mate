package com.example.makeMate.DTO;

import java.time.LocalDateTime;

import com.example.makeMate.Entity.Bbs;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data


public class BoardDTO {
	 private int seq;
	   private String id; // id
	   private int ref; // 답변글이 참조하는 원본 번호
	   private int step; //답변글 출력순서
	   private int depth; //답변글의 깊이
	   private String title; // 제목
	   private String content; //내용
	   private LocalDateTime createdAt; // 작성일
	   private int del; // 삭제
	   private int readCount; // 조회수
	
	

	public BoardDTO(final Bbs entity) {
		this.seq = entity.getSeq();
		this.id = entity.getId();
		this.ref = entity.getRef();
		this.step = entity.getStep();
		this.depth = entity.getDepth();
		this.title = entity.getTitle();
		this.content = entity.getContent();
		this.createdAt = entity.getCreatedAt();
		this.del = entity.getDel();
		this.readCount = entity.getReadCount();
		
		
		
		
		
	}

	public static Bbs toEntity(final BoardDTO dto) {
		return Bbs.builder()
						.seq(dto.getSeq())
						.id(dto.getId())
						.ref(dto.getRef())
						.step(dto.getStep())
						.depth(dto.getDepth())
						.title(dto.getTitle())
						.content(dto.getContent())
						.createdAt(dto.getCreatedAt())
						.del(dto.getDel())
						.readCount(dto.getReadCount())
						
						
						
						
						.build();
	}
}
