package com.example.makeMate.Entity;

import org.hibernate.annotations.GenericGenerator;

import com.example.makeMate.controller.BoardController;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Board")


public class Board {

	@Id
	@GeneratedValue(generator = "system-uuid" )
	@GenericGenerator(name = "system-uuid", strategy = "uuid")
	
	private String id;
	private String title;
	private String userId;
	private boolean done;
	
	
	
	
	
}
