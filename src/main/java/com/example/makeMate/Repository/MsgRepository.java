package com.example.makeMate.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.makeMate.Entity.MessageEntitiy;

public interface MsgRepository extends JpaRepository<MessageEntitiy, Long> {

	List<MessageEntitiy> findAll();
}
