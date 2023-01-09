package com.example.makeMate.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.QueryHints;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.makeMate.DTO.MessageDTO;
import com.example.makeMate.Entity.Message;
import com.example.makeMate.Entity.MessageEntitiy;

import jakarta.persistence.LockModeType;
import jakarta.persistence.QueryHint;


@Repository
public interface MsgRepository extends JpaRepository<Message, Long> {

//	List<MessageEntitiy> findAll();

//	MessageEntitiy save(MessageEntitiy message);
	
	Message save(Message message);
	
	//사망
	@Query(value="select room_id from msg where sender_id in (:id1,:id2) and reciver_id in (:id1,:id2) GROUP by room_id",  nativeQuery = true)
	Long findRoom_IdbySender_idAndReciver_id(@Param(value = "id1")  String user,@Param(value = "id2")String user2);
	//사망
	@Query(value="select LOGINID from user_info where id = ?1",  nativeQuery = true)
	String findLogin_idById(int id);
	//사망
	@Query(value="select * from msg where msg_id in(select max(msg_id) from msg where sender_id = ?1 or reciver_id = ?1 group by room_id)",nativeQuery = true)
	List<MessageEntitiy> findRecentMsg(String user);
	//사망
	@Query(value="select nvl(max(room_id),0)from msg",nativeQuery = true)
	Long getMaxRoom_id();
	
	//사망
	@Query(value="select * from msg where room_id = ?1 order by msg_id desc",nativeQuery = true)
	List<MessageEntitiy> findtMsgList(Long room_id);
	//사망
	@Query(value="select * from msg where reciver_id = ?1 and read_yn = 0",nativeQuery = true)
	List<MessageEntitiy> findAllByreciver_idAndread_yn(String user);
	
	//사망
	@Modifying
	@Query(value="update msg set read_yn=1 where room_id = ?1",nativeQuery = true)
	int updateRead_yn(Long room_id);
	
	//사망
	@Query(value="select count(*) from msg where room_id=?1 and read_yn=0 and reciver_id = ?2",nativeQuery = true)
	int findAllByreciver_idAndread_ynAndRoom_id(Long long1, String user);
	
	
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	
	
	@Query(value="select case when sendername = ?1 then receivername when receivername = ?1 then sendername end  from message where sendername = ?1 or receivername = ?1",nativeQuery = true)
	List<String> findConnectedUserList(String user);
	
	
	@Query(value="select * from message where (receivername= ?1 and sendername= ?2) or (receivername= ?2 or sendername= ?1) order by id desc",nativeQuery = true)
	List<Message> findMsgListDemo(String user,String conUser);
	
}
