package com.example.makeMate.service;




//import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.log;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.makeMate.Entity.Board;
import com.example.makeMate.Repository.BoardRepository;

@Service
public class BoardService {

    @Autowired
    private BoardRepository boardRepository;

    //findAll() jpa 메서드를 통해 DB에 저장된 데이터를 모두 출력
    public List<Board> getAllBoard(){
        System.out.println("Service getAll 함수 호출");
        return boardRepository.findAll();
    }

    // SAVE(board) 메서드를 이용해 파라미터로 들어온 board를 save함.
    public Board createBoard(Board board){
        System.out.println("DB 저장 완료");
        return boardRepository.save(board);
    }

    //상세보기를 위한 메서드로 파라미터로 넘어온 게시물 no를
    //findById(no)로 해당하는 no를 찾아 리턴함
    //<Optional>은 null point exception 방지를 위함
    public ResponseEntity<Optional<Board>> getBoard(Integer no) {
        Optional<Board> board = boardRepository.findById(no);
        return ResponseEntity.ok(board);
    }

    //update
    public ResponseEntity<Board> updateBoard(
            Board updateBoard){
        System.out.println("updateBoard 서비스 도착");
        int no = updateBoard.getNo();
        Board board = boardRepository.findById(no).orElseThrow(()->
                new IllegalArgumentException("해당 글 없음. " + no));
        board.setTitle(updateBoard.getTitle());
        board.setContents(updateBoard.getContents());
        board.setUpdatedTime(new Date());

        Board endUpdatedBoard = boardRepository.save(board);
        return ResponseEntity.ok(endUpdatedBoard);
    }


    //delete

//   public List<Board> create(final Board entity) {
//      // Validations
//      validate(entity);
//
//      repository.save(entity);
//      log.info("Entity Id : {} is saved.", entity.getBoardIdx());
//      return repository.findByBoardIdx(entity.getBoardIdx());
//   }
//
//   private void validate(final BoardEntity entity) {
//      if(entity == null) {
//         log.warn("Entity cannot be null.");
//         throw new RuntimeException("Entity cannot be null.");
//      }
//
//      if(entity.getBoardIdx() == null) {
//         log.warn("Unknown user.");
//         throw new RuntimeException("Unknown user.");
//      }
//   }
//
//   public List<BoardEntity> retrieve(final String board_idx) {
//      return repository.findByBoardIdx(board_idx);
//   }
//
//   public List<BoardEntity> update(final BoardEntity entity) {
//      // (1) 저장 할 엔티티가 유효한지 확인한다. 이 메서드는 2.3.1 Create Board에서 구현했다.
//      validate(entity);
//
//      // (2) 넘겨받은 엔티티 id를 이용해 BoardEntity를 가져온다. 존재하지 않는 엔티티는 업데이트 할 수 없기 때문이다.
//      final Optional<BoardEntity> original = repository.findById(entity.getBoardIdx());
//
//
//
//		original.ifPresent(Board -> {
//			// (3) 반환된 BoardEntity가 존재하면 값을 새 entity의 값으로 덮어 씌운다.
//			Board.setBoardTtl(entity.getBoardTtl());
//			Board.setBoardName(entity.getBoardName());
//			Board.setBoardCn(entity.getBoardCn());
//			Board.setBoardTtl(entity.getBoardTtl());
//
//			
//			// (4) 데이터베이스에 새 값을 저장한다.
//			repository.save(Board);
//		});
//
//		// 2.3.2 Retrieve Board에서 만든 메서드를 이용해 유저의 모든 Board 리스트를 리턴한다.
//		return retrieve(entity.getBoardIdx());
//	}
//
//
//   public List<BoardEntity> delete(final BoardEntity entity) {
//      // (1) 저장 할 엔티티가 유효한지 확인한다. 이 메서드는 2.3.1 Create Board에서 구현했다.
//      validate(entity);
//
//      try {
//         // (2) 엔티티를 삭제한다.
//         repository.delete(entity);
//      } catch(Exception e) {
//         // (3) exception 발생시 id와 exception을 로깅한다.
//         log.error("error deleting entity ", entity.getBoardIdx(), e);
//
//         // (4) 컨트롤러로 exception을 날린다. 데이터베이스 내부 로직을 캡슐화 하기 위해 e를 리턴하지 않고 새 exception 오브젝트를 리턴한다.
//         throw new RuntimeException("error deleting entity " + entity.getBoardIdx());
//      }
//      // (5) 새 Board리스트를 가져와 리턴한다.
//      return retrieve(entity.getBoardIdx());
//   }

}

//package com.example.makeMate.service;
//
//import java.util.List;
//import java.util.Optional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.example.makeMate.Entity.BoardEntity;
//import com.example.makeMate.Repository.BoardRepository;
//
//import lombok.extern.slf4j.Slf4j;
//
//@Slf4j
//@Service
//public class BoardService {
//
//   @Autowired
//   private BoardRepository repository;
//
//   public String testService() {
//      // BoardEntity 생성
//      BoardEntity entity = BoardEntity.builder().title("My first Board item").build();
//      // BoardEntity 저장
//      repository.save(entity);
//      // BoardEntity 검색
//      BoardEntity savedEntity = repository.findById(entity.getUserId()).get();
//      return savedEntity.getTitle();
//   }
//
//   public List<BoardEntity> create(final BoardEntity entity) {
//      // Validations
//      validate(entity);
//
//      repository.save(entity);
//      log.info("Entity Id : {} is saved.", entity.getUserId());
//      return repository.findByUserId(entity.getUserId());
//   }
//
//   private void validate(final BoardEntity entity) {
//      if(entity == null) {
//         log.warn("Entity cannot be null.");
//         throw new RuntimeException("Entity cannot be null.");
//      }
//
//      if(entity.getUserId() == null) {
//         log.warn("Unknown user.");
//         throw new RuntimeException("Unknown user.");
//      }
//   }
//
//   public List<BoardEntity> retrieve(final String userId) {
//      return repository.findByUserId(userId);
//   }
//
//   public List<BoardEntity> update(final BoardEntity entity) {
//      // (1) 저장 할 엔티티가 유효한지 확인한다. 이 메서드는 2.3.1 Create Board에서 구현했다.
//      validate(entity);
//
//      // (2) 넘겨받은 엔티티 id를 이용해 BoardEntity를 가져온다. 존재하지 않는 엔티티는 업데이트 할 수 없기 때문이다.
//      final Optional<BoardEntity> original = repository.findById(entity.getUserId());
//
//
//
//      original.ifPresent(Board -> {
//         // (3) 반환된 BoardEntity가 존재하면 값을 새 entity의 값으로 덮어 씌운다.
//         Board.setTitle(entity.getTitle());
//         Board.setName(null);
//         Board.setContents(entity.getContents());
//         Board.setCreated_time(entity.getCreated_time());
//
//         
//         
//         
//         
//         
//         
//         
//         
//         
//         
//         
//         // (4) 데이터베이스에 새 값을 저장한다.
//         repository.save(Board);
//      });
//
//      // 2.3.2 Retrieve Board에서 만든 메서드를 이용해 유저의 모든 Board 리스트를 리턴한다.
//      return retrieve(entity.getUserId());
//   }
//
//
//   public List<BoardEntity> delete(final BoardEntity entity) {
//      // (1) 저장 할 엔티티가 유효한지 확인한다. 이 메서드는 2.3.1 Create Board에서 구현했다.
//      validate(entity);
//
//      try {
//         // (2) 엔티티를 삭제한다.
//         repository.delete(entity);
//      } catch(Exception e) {
//         // (3) exception 발생시 id와 exception을 로깅한다.
//         log.error("error deleting entity ", entity.getUserId(), e);
//
//         // (4) 컨트롤러로 exception을 날린다. 데이터베이스 내부 로직을 캡슐화 하기 위해 e를 리턴하지 않고 새 exception 오브젝트를 리턴한다.
//         throw new RuntimeException("error deleting entity " + entity.getUserId());
//      }
//      // (5) 새 Board리스트를 가져와 리턴한다.
//      return retrieve(entity.getUserId());
//   }
//
//}
