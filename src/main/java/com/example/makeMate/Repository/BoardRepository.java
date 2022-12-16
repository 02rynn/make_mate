package com.example.makeMate.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.makeMate.Entity.Board;


@Repository

public interface BoardRepository extends JpaRepository<Board, String> {

}