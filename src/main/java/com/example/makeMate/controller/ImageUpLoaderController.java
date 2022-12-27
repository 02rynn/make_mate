package com.example.makeMate.controller;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;

import org.apache.commons.io.FileUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import lombok.extern.slf4j.Slf4j;


@Slf4j
@RestController
public class ImageUpLoaderController {
	
	  @PostMapping(value = "/upload")
	    public Map<String, Object> upload(@RequestParam("file") MultipartFile multipartFile) {
	        File targetFile = new File("src/main/resources/static/imgs/" + multipartFile.getOriginalFilename());
	        try {
	            InputStream fileStream = multipartFile.getInputStream();
	            FileUtils.copyInputStreamToFile(fileStream, targetFile);
	        } catch (IOException e) {
	            FileUtils.deleteQuietly(targetFile);
	            e.printStackTrace();
	        }
	        Map<String, Object> m = new HashMap<>();
	        m.put("ImagePath", targetFile);
	        return m;
	    }
}

	
	
	
	
