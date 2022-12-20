package com.example.makeMate.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.makeMate.Entity.NbEntity;
import com.example.makeMate.Repository.NbRepository;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j

public class NbService {

	@Autowired
	private NbRepository repository;
	
public List<NbEntity> create(final NbEntity entity){
	
	validate(entity);
	
	repository.save(entity);
	
	log.info("Entity id : {} is saved",entity.getId());
	
	return repository.findByUserId(entity.getUserId());
}

private void validate(final NbEntity entity) {
	if(entity ==null ) {
		log.warn("Entity cannot be null.");
		throw new RuntimeException("Entity cannot be null.");
		
		}
	
 if(entity.getUserId() == null) {
	 
	 log.warn("Unknow user.");
	 
	 throw new RuntimeException("Unknow user.");
	 
	 
 }	
	

 }
public List<NbEntity> retrieve(final String userId){
	 
	 
	 return repository.findByUserId(userId);
	 


}

public List<NbEntity> update(final NbEntity entity) {
	// (1) 저장 할 엔티티가 유효한지 확인한다. 이 메서드는 2.3.1 Create Todo에서 구현했다.
	validate(entity);

	// (2) 넘겨받은 엔티티 id를 이용해 TodoEntity를 가져온다. 존재하지 않는 엔티티는 업데이트 할 수 없기 때문이다.
	final Optional<NbEntity> original = repository.findById(entity.getId());



	original.ifPresent(todo -> {
		// (3) 반환된 TodoEntity가 존재하면 값을 새 entity의 값으로 덮어 씌운다.
		todo.setTitle(entity.getTitle());
		todo.setDone(entity.isDone());

		// (4) 데이터베이스에 새 값을 저장한다.
		repository.save(todo);
	});

	// 2.3.2 Retrieve Todo에서 만든 메서드를 이용해 유저의 모든 Todo 리스트를 리턴한다.
	return retrieve(entity.getUserId());
}

public List<NbEntity> delete(final NbEntity entity) {
	// (1) 저장 할 엔티티가 유효한지 확인한다. 이 메서드는 2.3.1 Create Todo에서 구현했다.
	validate(entity);

	try {
		// (2) 엔티티를 삭제한다.
		repository.delete(entity);
	} catch(Exception e) {
		// (3) exception 발생시 id와 exception을 로깅한다.
		log.error("error deleting entity ", entity.getId(), e);

		// (4) 컨트롤러로 exception을 날린다. 데이터베이스 내부 로직을 캡슐화 하기 위해 e를 리턴하지 않고 새 exception 오브젝트를 리턴한다.
		throw new RuntimeException("error deleting entity " + entity.getId());
	}
	// (5) 새 Todo리스트를 가져와 리턴한다.
	return retrieve(entity.getUserId());
}

}