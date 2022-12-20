package com.example.makeMate.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "Board")


public class BoardEntity {

	
	
	
	
	private String id;
	private String userId;
	private String title;
	private boolean done;
	
	
	
	
}
