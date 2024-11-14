package com.yordles.spring_webflux_app.repository;

import com.yordles.spring_webflux_app.model.Task;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;

@Repository
public interface TaskRepository extends ReactiveMongoRepository<Task, String> {
    Flux<Task> findByEmail(String email);
}