package com.example.makeMate.Repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.example.makeMate.Entity.Board;

import java.util.List;

//jpa를 사용할수 있게 해주는 공통 인터페이스
public interface BoardRepository extends JpaRepository<Board, Integer> {

}