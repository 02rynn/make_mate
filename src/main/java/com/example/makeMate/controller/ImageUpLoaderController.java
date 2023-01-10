package com.example.makeMate.controller;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.makeMate.Repository.ImageRepository;
import com.example.makeMate.Repository.UserRepository;

import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
public class ImageUpLoaderController {

	@Autowired
	private ImageRepository repository;
	
	

	@Transactional
	@PostMapping(value = "/upload/{userId}")
	public Map<String, Object> upload(@PathVariable String userId ,@RequestParam("file") MultipartFile multipartFile) {

		int no = Integer.parseInt(userId);
//		  
//		  UserImage userImage = new UserImage();
		String uuid = UUID.randomUUID().toString();
		String originName = multipartFile.getOriginalFilename();

		System.out.println(originName);
		String ext =  FilenameUtils.getExtension(originName);
		System.out.println(ext);
		String pullPath = "src/main/front/public/profile/" + uuid+"."+ext;
//		  userImage.setId(1L);
//		  userImage.setPullPath(pullPath);
//		  userImage.setUserUploadPath(multipartFile.getOriginalFilename());
		
//		File targetFile = new File("src/main/front/public/profile/" + multipartFile.getOriginalFilename());
		File targetFile = new File("src/main/front/public/profile/" + uuid+"."+ext);
		try {
			InputStream fileStream = multipartFile.getInputStream();
			FileUtils.copyInputStreamToFile(fileStream, targetFile);
		} catch (IOException e) {
			FileUtils.deleteQuietly(targetFile);
			e.printStackTrace();
		}
		repository.insertImg(no, pullPath, uuid+"."+ext);
		Map<String, Object> m = new HashMap<>();
		m.put("ImagePath", targetFile);
		return m;
	}

	
	
	
}
