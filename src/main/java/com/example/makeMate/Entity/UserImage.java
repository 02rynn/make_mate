package com.example.makeMate.Entity;




import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;


@Data
@Entity
@Table(name="USERIMAGE")
public class UserImage{
    
	@Id
//	@OneToOne(mappedBy = "id")
    private Long id;

	@Column(length = 50000)
	private String pullPath;
	@Column(length = 50000)
	private String userUploadPath;
    
    


}