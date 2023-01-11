package com.example.makeMate.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name="comment_make")
public class CommentEntity {
	
	//유저(1) : 댓글(many)
	@Id
	//@JoinColumn(name="USER_INFO_ID")
	//@ManyToOne
	private long id;
	
	@Column(name="no")
	private int no; //게시판 외래키 
	
	@Column(name="comment_id")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator ="comment_seq")
	@SequenceGenerator(name = "comment_seq",sequenceName = "comment_SEQ",initialValue = 1, allocationSize = 1)
	private int commentId;
	
	
	@Column(name="content",length = 50000)
	private String content;
	
	@Column(name="comment_writer")	
	private String commentWriter;

}
