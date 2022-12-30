package com.example.makeMate.Entity;






import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

import org.hibernate.annotations.GenericGenerator;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;









@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "board")
public class BoardEntity {

	@Id
	@GeneratedValue(generator="boardIdx")
	private String boardIdx;
	private String boardName;
	private String boardTtl;
	private String boardCn;
	private LocalDateTime boardDate; 
	
}








