package com.example.makeMate.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.makeMate.Entity.MessageEntitiy;


@Repository
public interface MsgRepository extends JpaRepository<MessageEntitiy, Long> {

	List<MessageEntitiy> findAll();

	MessageEntitiy save(MessageEntitiy message);
	
	@Query(value="select room_id from msg where sender_id in (:id1,:id2) and reciver_id in (:id1,:id2) GROUP by room_id",  nativeQuery = true)
	Long findRoom_IdbySender_idAndReciver_id(@Param(value = "id1")  String user,@Param(value = "id2")String user2);
	
	@Query(value="select LOGIN_ID from user_info where id = ?1",  nativeQuery = true)
	String findLogin_idById(int id);

	@Query(value="select * from msg where msg_id in(select max(msg_id) from msg where sender_id = ?1 or reciver_id = ?1 group by room_id)",nativeQuery = true)
	List<MessageEntitiy> findRecentMsg(String user);
	
	@Query(value="select nvl(max(room_id),0)from msg",nativeQuery = true)
	Long getMaxRoom_id();
	
	@Query(value="select * from msg where room_id = ?1 order by msg_id desc",nativeQuery = true)
	List<MessageEntitiy> findtMsgList(int room_id);
	@Query(value="select * from msg where reciver_id = ?1 and read_yn = 0",nativeQuery = true)
	List<MessageEntitiy> findAllByreciver_idAndread_yn(String user);
	
}
