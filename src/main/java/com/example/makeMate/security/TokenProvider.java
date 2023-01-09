//package com.example.makeMate.security;
//
//import java.security.Key;
//import java.time.Instant;
//import java.time.temporal.ChronoUnit;
//import java.util.Date;
//import java.util.UUID;
//
//import org.springframework.stereotype.Service;
//
//import com.example.makeMate.Entity.UserEntity;
//
//import io.jsonwebtoken.Claims;
//import io.jsonwebtoken.Jwts;
//import io.jsonwebtoken.SignatureAlgorithm;
//import io.jsonwebtoken.security.Keys;
//import lombok.extern.slf4j.Slf4j;
//
//@Slf4j
//@Service
//public class TokenProvider {
//	
//	
////	private static final String SECRET_KEY = "NMA8JPctFUNA59F5";
//	private Key key = Keys.secretKeyFor(SignatureAlgorithm.HS512);
//	
//	public String create(UserEntity userEntity) { //JWT토큰 생성
//	
//		//기한은 지금부터 1일
//		Date expiryDate = Date.from(
//				Instant.now()
//				.plus(1, ChronoUnit.DAYS));
//	
//		return Jwts.builder()
//				.signWith(key)
//				//Payload에 들어갈 내용
//				.setSubject(userEntity.getLoginId())
//				.setIssuer("demo app") //iss
//				.setIssuedAt(new Date()) //iat
//				.setExpiration(expiryDate) //exp
//				.compact();
//	}
//	
//	public String validateAndGetUserId(String token) { //토큰을 디코딩 및 파싱하고 토큰의 위조여부를 확인
//		
//		Claims claims = Jwts.parserBuilder()
//				.setSigningKey(key)
//				.build()
//				.parseClaimsJws(token)
//				.getBody();
//		
//		return claims.getSubject(); //사용자의 아이디를 리턴
//			
//
//	}
//
//}
