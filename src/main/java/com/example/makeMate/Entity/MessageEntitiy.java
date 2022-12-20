package com.example.makeMate.Entity;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MessageEntitiy {
	
	public Integer msg_id;
	public Integer sender_id;
	public Integer reciver_id;
	public int read_yn;
	public Date send_time;
	public String content;
	
	

}
