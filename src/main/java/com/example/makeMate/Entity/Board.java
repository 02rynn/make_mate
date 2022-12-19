package com.example.makeMate.Entity;

import java.util.Date;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;





@Entity
@Table(name = "board")
@DynamicInsert 
@DynamicUpdate


public class Board {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)

private Integer no;

@Column(name = "type")
private String type;

@Column(name = "title")
private String title;

@Column(name = "contents")
private String contents;

@Column(name = "member_no")
private Integer memberNo;

@Column(name = "created_time")
private Date createdTime;

@Column(name = "updated_time")
private Date updatedTime;

@Column(name = "likes")
private Integer likes;

@Column(name = "counts")
private Integer counts;








	

}