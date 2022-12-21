package com.example.makeMate.DTO;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor


public class ResponseDTO<T> {

	private String error;
	private List<T> data;
	
}
