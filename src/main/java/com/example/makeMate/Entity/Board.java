package com.example.makeMate.Entity;
import java.util.Date;



import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Table;

@Entity
@Data
@Table(name = "board")
@DynamicInsert
@DynamicUpdate
public class Board {
    
    //DB구조를 설명하고 DTO/VO 역활
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JoinColumn(name="no")
    private Integer no;

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

// ---Getter/Setter ---


    @Builder
    public Board(int no, String title, String contents, int memberNo, int likes, int counts ) {
        this.no = no;
        this.title = title;
        this.contents = contents;
        this.memberNo = memberNo;
        this.likes =likes;
        this.counts = counts;

    }

    public Board() {

    }
}

