package com.example.makeMate.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.makeMate.Entity.NbEntity;





@Repository

public interface NbRepository extends JpaRepository<NbEntity , String> {

  List<NbEntity> findByUserId(String userId);

	
}
