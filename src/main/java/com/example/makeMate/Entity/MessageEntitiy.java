package com.example.makeMate.Entity;

import java.sql.Date;

import java.sql.Timestamp;
import java.time.format.DateTimeFormatter;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="MSG")
//@SequenceGenerator(name = "msg_seq",sequenceName = "MSG_SEQ",initialValue = 1, allocationSize = 1)
public class MessageEntitiy {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "msg_seq")
	@SequenceGenerator(name = "msg_seq",sequenceName = "MSG_SEQ",initialValue = 1, allocationSize = 1)
	public Integer msg_id;
	public String sender_id;
	public String reciver_id; 
	public int read_yn;
	public Timestamp send_time;
	public String content;
	public Long room_id;
	
	

}
