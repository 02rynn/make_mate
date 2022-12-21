package com.example.makeMate.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration // 스프링 빈으로 등록
public class WebConfig implements WebMvcConfigurer {
	private final long MAX_AGE_SECS = 3600;

	@Override
	public void addCorsMappings(CorsRegistry registry) {
		// TODO Auto-generated method stub
		WebMvcConfigurer.super.addCorsMappings(registry);
//		registry.addMapping("/**").allowedOrigins("*").allowCredentials(false);
//		registry.addMapping("/**").allowCredentials(false).allowedOriginPatterns("*:*", "*")
		registry.addMapping("/**").allowedOriginPatterns("*");
	}
}
