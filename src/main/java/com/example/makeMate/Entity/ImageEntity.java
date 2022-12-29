package com.example.makeMate.Entity;




import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
@Entity
public class ImageEntity {

	@Id
	@Column( name="id" )
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator ="profile_seq")
	private int profileId;	

	@Column( name="profile_realfullpath")
	private String realFullPath; // 파일 처리로 사용할 이름   

	@Column(name="profile_filename")
	private String fileName; //사용자가 올린 파일 이름

}
