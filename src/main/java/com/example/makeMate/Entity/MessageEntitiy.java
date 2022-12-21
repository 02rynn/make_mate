package com.example.makeMate.Entity;

import java.sql.Date;

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
@SequenceGenerator(name = "msg_seq",sequenceName = "MSG_SEQ",initialValue = 1, allocationSize = 1)
public class MessageEntitiy {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "msg_seq")
	public Integer msg_id;
	public Integer sender_id;
	public Integer reciver_id;
	public int read_yn;
	public Date send_time;
	public String content;
	
	

}
