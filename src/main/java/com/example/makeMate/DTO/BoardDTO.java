package com.example.makeMate.DTO;

import com.example.makeMate.Entity.Board;
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
		
	public BoardDTO(final  Board entity ) {
		
		this.id = entity.getId();
		this.title = entity.getTitle();
		this.done = entity.isDone();
		
			
		
	}
	
}
