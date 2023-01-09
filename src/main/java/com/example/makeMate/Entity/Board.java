package com.example.makeMate.Entity;
import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

@Entity
@Data
@Table(name = "board")
@DynamicInsert
@DynamicUpdate
@NoArgsConstructor
@AllArgsConstructor
public class Board {
    
    //DB구조를 설명하고 DTO/VO 역활
    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY) Oracle DB는 auto increment 기능이 없어서 IDENTITY 사용 불가
    //Oracle DB 는 SEQUENCE 사용해야함. -> 사용하면서 활용할 시퀀스를 만들어두기!
//    @JoinColumn(name="no")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "no_seq")
    @SequenceGenerator(name = "no_seq",sequenceName = "NO_SEQ",initialValue = 1, allocationSize = 1)
    private Integer no;

    @Column(name = "title")
    private String title;

    @Column(name = "contents")
    private String contents;

    @Column(name = "created_time")
    private Date createdTime;

    @Column(name = "updated_time")
    private Date updatedTime;

    @Column(name = "likes")
    private Integer likes;

    @Column(name = "counts")
    private Integer counts;
   
    @Column(name = "CATEGORYCODE")
    private String categoryCode;
    

// ---Getter/Setter ---


    @Builder
    public Board(int no, String title, String contents,  int likes, int counts,String categoryCode) {
        this.no = no;
        this.title = title;
        this.contents = contents;
      
        this.likes =likes;
        this.counts = counts;
        this.categoryCode = categoryCode;

    }

 
}

