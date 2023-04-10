package com.example.makeMate.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name="BOARD_CATEGORY")
public class BoardCategory {
	
	private String categoryName;
	
	@Id
	private String categoryCode;

}
