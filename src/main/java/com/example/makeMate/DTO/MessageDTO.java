package com.example.makeMate.DTO;

import java.sql.Date;

import lombok.Data;

@Data
public class MessageDTO {
	
	
	private Long ID;
    private String SENDERNAME;
    private String RECEIVERNAME;
    private String MESSAGE;
    private String REG_DATE;
    private String STATUS;

}
