package com.example.makeMate.session;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import org.springframework.stereotype.Component;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class sessionManager {
	public static final String SESSION__COOKIE_NAME = "tempSessionId";
	private Map<String, Object> sessionMap = new HashMap<String, Object>();
	
	public void create(Object object, HttpServletResponse resp) { //로그인하면 member객체가 넘어오면 그걸 String에 매치시켜서 관리할거임
		
		//리스폰스 받아와서 여기다가 쿠키좀 담아주세요
		String sessionId = UUID.randomUUID().toString(); //유니크한 아이디값을 만드는데에 도움을 줌. 랜덤한 값을 뽑아내는 용도로 사용 
		sessionMap.put(sessionId, object); //사용자가 쿠키에 담아서 세션아이디를 보내면 이 세션아이디가 있는지 없는지 걸러서 로그인유무 판단
		
		Cookie cookie = new Cookie(SESSION__COOKIE_NAME,sessionId); //쿠키에 랜덤한 아이디인 세션아이디를 넣고 tempSessionId라고 이름붙임
		resp.addCookie(cookie);
		
	}
	
	//세션에 저장된 정보 지우기 
	public void remove(HttpServletRequest req) {
		
		Cookie cookie = findCookie(req, SESSION__COOKIE_NAME);
		if(cookie != null) {			
			sessionMap.remove(cookie.getValue());
		}
	}
	
	public Object getSessionObject(HttpServletRequest req) {
		//템프세션인 쿠키 찾아서, 그 쿠키의 밸류값을 읽고, -> 이 밸류값의 키를 가진 Object를 가지고 올거임 
		//req- > 쿠키 뒤져서 -> tempSession(name)인 애를 찾고  -> value(UUID)
		//VALUE(uuid)         sessionMap<value(uuid), Member)
		
//		if(req.getCookies() != null) { //쿠키가 null이 아니면 -> 내가 삭제하려는 쿠키를 찾을거임
//			for(Cookie cookie : req.getCookies()) {
//				if(cookie.getName().equals("SESSION__COOKIE_NAME")) { //이름이 temp~인 애가 target임
//					//키값에 해당하는 밸류를 주세요
//					return sessionMap.get(cookie.getValue()); //map에서 키값으로 get하면 object가 나옴 그걸 get해야함
//					
//					
//				}
//			}
//		}
				Cookie cookie = findCookie(req, SESSION__COOKIE_NAME);
				if(cookie != null) {
					
					return sessionMap.get(cookie.getValue()); 
				}
				 	return null;
		
	}
	
	//쿠키를 찾아내는 함수는 외부에서 접근불가하도록 private로 하는게 좋음 
	//null값 반환, 쿠키가 널이면 동작안하게  
	public Cookie findCookie(HttpServletRequest req, String cookieName) { //위에서 쿠키 찾는게 반복이 되니까 아예 따로 빼서 처리하기로 
		
		if(req.getCookies() != null) { //쿠키가 null이 아니면 -> 내가 삭제하려는 쿠키를 찾을거임
			for(Cookie cookie : req.getCookies()) {
				if(cookie.getName().equals(cookieName)) { //이름이 temp~인 애가 target임
					//쿠키의 밸류가 맵의 쿠키로 담겨잇음
					
					return cookie;
				}
			}
		}
		
		return null;
	}
}
