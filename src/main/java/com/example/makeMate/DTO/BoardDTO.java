package com.example.makeMate.DTO;


import com.example.makeMate.Entity.BoardEntity;
import com.example.makeMate.controller.BoardController;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor


public class BoardDTO {

	private String id;
	private String title;
	private boolean done;
		
	public BoardDTO(final  BoardEntity entity ) {
		
		this.id = entity.getId();
		this.title = entity.getTitle();
		this.done = entity.isDone();
				
		
		
	}
	
	public static BoardEntity toEntity(final BoardDTO dto) {
		
		
		return BoardEntity.builder().id(dto.getId()).title(dto.getId()).done(dto.isDone()).build();
		
		
		
	}


	
	
	
}
