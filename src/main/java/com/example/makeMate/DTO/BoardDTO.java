package com.example.makeMate.DTO;

import java.time.LocalDateTime;

import com.example.makeMate.Entity.BoardEntity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data


public class BoardDTO {
	private String boardIdx ;
	private String boardName ;
	private String boardTtl ;
	private String boardCn; 
	private LocalDateTime boardDate; 
	

	public BoardDTO(final BoardEntity entity) {
		this.boardIdx = entity.getBoardIdx();
		this.boardTtl = entity.getBoardTtl();
		this.boardName = entity.getBoardName();
		this.boardCn = entity.getBoardCn();
		this.boardDate = entity.getBoardDate();
	}

	public static BoardEntity toEntity(final BoardDTO dto) {
		return BoardEntity.builder()
						.boardIdx(dto.getBoardIdx())
						.boardTtl(dto.getBoardTtl())
						.boardName(dto.getBoardName())
						.boardCn(dto.getBoardCn())
						.boardDate(dto.getBoardDate())
						.build();
	}
}
