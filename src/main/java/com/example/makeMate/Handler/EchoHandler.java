package com.example.makeMate.Handler;


import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import com.example.makeMate.Entity.MessageEntitiy;
import com.example.makeMate.Repository.MsgRepository;

import lombok.extern.slf4j.Slf4j;


@Slf4j
@Component
public class EchoHandler extends TextWebSocketHandler {
   
   
   private static List<WebSocketSession> sessionList = new ArrayList<WebSocketSession>();
   private static MsgRepository msgRepository;
   
   
//   Map<String,WebSocketSession> us ers = new HashMap<>();
   
   @Override
   public void afterConnectionEstablished(WebSocketSession session) throws Exception {
// 웹소켓 세션에 접속한 모든 유저를 sessionList에 저장함
	   //       String user_name = searchUserName(session);
//       for(WebSocketSession sess : sessionList) {
//           sess.sendMessage(new TextMessage(user_name+"님이 접속했습니다."));
//       }
	   
	   //최초 접속 시 읽지않는 메세지의 갯수를 보여주는 함수 
//	    String user_name = searchUserName(session);
//        sessionList.add(session);
//            session.sendMessage(new TextMessage("recMs :"+msgRepository.findAllByreciver_idAndread_yn("asd").size()));
//    }
//	   System.out.println("안읽은 메세지 수 "+unReadList.size());
	   log.info(session.toString());
       System.out.println("연결 성공");
       sessionList.add(session);
   }
   
   @Override
   protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
       String user_name= searchUserName(session);
       System.out.println("연결 성공");
       log.info("text msg : {}" , message.getPayload());
      
//       //사용자가 접속중인지 아닌지
//       WebSocketSession chatwritingSession =users.get("user_name");
//       if(chatwritingSession != null) {
//           TextMessage textMessage = new TextMessage(user_name+ " 님이 메세지를 보냈습니다.");
//           chatwritingSession.sendMessage(textMessage);
//       }
       
       
       for(WebSocketSession sess: sessionList) {
           sess.sendMessage(new TextMessage(user_name+": "+message.getPayload()));
       }
   }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
   
   @Override
   public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
       String user_name = searchUserName(session);
       System.out.println("연결 끊어짐");
       for(WebSocketSession sess : sessionList) {
           sess.sendMessage(new TextMessage(user_name+"님의 연결이 끊어졌습니다."));
       }
       sessionList.remove(session);
   }
   
   public String searchUserName(WebSocketSession session)throws Exception {
	   System.out.println("연결 성공");
	   String user_name;
       Map<String, Object> map;
       map = session.getAttributes();
       user_name = (String) map.get("user_name");
       return user_name;
   }
}
