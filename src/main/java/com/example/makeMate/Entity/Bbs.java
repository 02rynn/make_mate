package com.example.makeMate.Entity;






import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

import org.hibernate.annotations.GenericGenerator;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;









@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "board")
public class Bbs {

	@Id
	@GeneratedValue(generator="seq")
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
}








