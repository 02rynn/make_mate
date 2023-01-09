package com.example.makeMate.Entity;

import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name="MESSAGE")
@DynamicInsert
public class Message {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "msg_seq")
	@SequenceGenerator(name = "msg_seq",sequenceName = "MSG_SEQ",initialValue = 1, allocationSize = 1)
	private Long id;
    private String senderName;
    private String receiverName;
    private String message;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    @Column(name = "REG_DATE")
    @ColumnDefault("SYSDATE")
    private String reg_date;
    private Status status;
}