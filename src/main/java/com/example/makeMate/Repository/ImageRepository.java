package com.example.makeMate.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.makeMate.Entity.UserImage;

@Repository
public interface ImageRepository extends JpaRepository<UserImage, Long>{

	
	
	@Modifying
	@Query(value="INSERT INTO USERIMAGE(ID,PULLPATH,USERUPLOADPATH) values (:id1,:path1,:path2)",nativeQuery = true)
	public void insertImg(@Param(value ="id1") int id ,@Param(value ="path1") String pullPath ,@Param(value ="path2") String userUploadPath);

	

	@Query(value="select * from userimage where ID = ?1",nativeQuery = true)
	public UserImage findUSERUPLOADPATHByID(String userId);

}