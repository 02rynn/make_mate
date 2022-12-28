package com.example.makeMate.controller;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;

import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.makeMate.Repository.ImageRepository;

import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
public class ImageUpLoaderController {

	@Autowired
	private ImageRepository repository;

	@Transactional
	@PostMapping(value = "/upload")
	public Map<String, Object> upload(@RequestParam("file") MultipartFile multipartFile) {

//		  
//		  UserImage userImage = new UserImage();
		String pullPath = "src/main/resources/static/imgs/" + multipartFile.getOriginalFilename();
//		  userImage.setId(1L);
//		  userImage.setPullPath(pullPath);
//		  userImage.setUserUploadPath(multipartFile.getOriginalFilename());

		File targetFile = new File("src/main/resources/static/imgs/" + multipartFile.getOriginalFilename());
		try {
			InputStream fileStream = multipartFile.getInputStream();
			FileUtils.copyInputStreamToFile(fileStream, targetFile);
		} catch (IOException e) {
			FileUtils.deleteQuietly(targetFile);
			e.printStackTrace();
		}
		repository.insertImg(1, pullPath, multipartFile.getOriginalFilename());
		Map<String, Object> m = new HashMap<>();
		m.put("ImagePath", targetFile);
		return m;
	}

}
