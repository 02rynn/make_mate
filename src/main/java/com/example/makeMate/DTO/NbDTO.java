package com.example.makeMate.DTO;

import com.example.makeMate.Entity.NbEntity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor


public class NbDTO {

	private String id;
	private String title;
	private boolean done;
	
	public NbDTO(final NbEntity entity) {
		
		this.id = entity.getId();
		this.title = entity.getTitle();
		this.done = entity.isDone();
		
		}
	
	public static NbEntity toEntity(final NbDTO dto) {
		
		return NbEntity.builder().id(dto.getId()).title(dto.getTitle()).done(dto.isDone()).build();
		
		
		
	}
	
	
	
}
