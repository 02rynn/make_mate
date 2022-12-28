package com.example.makeMate.DTO;

import java.time.LocalDateTime;

import com.example.makeMate.Entity.BoardEntity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class BoardDTO {
	private String userId ;
	private String name ;
	private String title ;
	private String contents; 
	private LocalDateTime created_time; 
	

	public BoardDTO(final BoardEntity entity) {
		this.userId = entity.getUserId();
		this.title = entity.getTitle();
		this.name = entity.getName();
		this.contents = entity.getContents();
		this.created_time = entity.getCreated_time();
	}

	public static BoardEntity toEntity(final BoardDTO dto) {
		return BoardEntity.builder()
						.userId(dto.getUserId())
						.title(dto.getTitle())
						.name(dto.getName())
						.contents(dto.getContents())
						.created_time(dto.created_time)
						.build();
	}
}
