package com.example.makeMate.DTO;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class ResponseDTO<T> { //HTTP 응답으로 사용하기 위한 DTO
	private String error;
	private List<T> data;
}

