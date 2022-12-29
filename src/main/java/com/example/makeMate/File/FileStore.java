//package com.example.makeMate.File;
//
//import java.io.File;
//import java.io.IOException;
//import java.util.UUID;
//
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.stereotype.Component;
//import org.springframework.web.multipart.MultipartFile;
//
//import com.example.makeMate.DTO.UploadFile;
//
//@Component
//public class FileStore {
//	
//	@Value("${upload.file.path}")
//	private String fileDir; 
//	//= "D:\\files\\images";
//
//	public UploadFile saveFile(MultipartFile file) { //멀티파일이 들어오면
//		
//		if(file.isEmpty()) {
//			return null;
//		}
//		
//		String orgFileName = file.getOriginalFilename(); //일단 사용자의 이름
//		String realFileName = getRealFileName(orgFileName); //우리가 랜덤으로 지정해줄 이름
//		
//		try {
//			file.transferTo(new File(fileDir + realFileName));
//		} catch (IllegalStateException | IOException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		
//		UploadFile uploadFile = new UploadFile (orgFileName, realFileName);
//		return uploadFile;
//	}
//	
//	public String getRealFileName(String fileName) {
//		String realFileName = UUID.randomUUID().toString();
//		//String ext = fileName.substring(fileName.lastIndexOf("."));
//		String ext = getExtension(fileName);
//		return realFileName + "."+ ext;
//	}
//	
//	public String getExtension(String fileName) {
//		String ext = fileName.substring(fileName.lastIndexOf(".")+1);
//		return ext;
//	}
//}
