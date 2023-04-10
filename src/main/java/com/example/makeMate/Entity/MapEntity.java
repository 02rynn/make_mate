package com.example.makeMate.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name = "mapinfo")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity

public class MapEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	private String address;
	
	
	
}
