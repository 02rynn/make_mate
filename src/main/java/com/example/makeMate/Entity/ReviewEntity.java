package com.example.makeMate.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name="review_make")
public class ReviewEntity {
	
	@Id
	private long id;
	
	@Column(name="review_id")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator ="review_seq")
	@SequenceGenerator(name = "review_seq",sequenceName = "REVIEW_SEQ",initialValue = 1, allocationSize = 1)
	private int reviewId;
	
	@Column(name="rate")
	private int rate;
	
	@Column(name="content",length = 50000)
	private String content;
	
	@Column(name="review_writer")	
	private String reviewWriter;
	
	@Column(name="review_sender")
	private String reviewSender;

}
