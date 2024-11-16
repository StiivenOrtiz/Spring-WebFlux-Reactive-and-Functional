package com.yordles.spring_webflux_app.service;

import com.yordles.spring_webflux_app.model.Task;
import com.yordles.spring_webflux_app.repository.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
@RequiredArgsConstructor
public class TaskService {
    private final TaskRepository taskRepository;
    private final UserService userService;

    public Flux<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    public Mono<Task> getTaskById(String id) {
        return taskRepository.findById(id);
    }

    public Flux<Task> getTasksByEmail(String email) {
        return taskRepository.findByEmail(email);
    }

    // TaskService.java - modify createTask method
    public Mono<Task> createTask(Task task) {
        return userService.getUserByEmail(task.getEmail())
                .flatMap(user -> taskRepository.save(task))
                .switchIfEmpty(Mono.empty());
    }

    public Mono<Task> updateTask(String id, Task task) {
        return taskRepository.findById(id)
                .flatMap(existingTask -> {
                    existingTask.setTitle(task.getTitle());
                    existingTask.setDescription(task.getDescription());
                    existingTask.setCompleted(task.isCompleted());
                    return taskRepository.save(existingTask);
                })
                .switchIfEmpty(Mono.empty()); // Handle non-existent task
    }

    public Mono<Void> deleteTask(String id) {
        return taskRepository.findById(id)
                .flatMap(existingTask -> taskRepository.deleteById(id))
                .switchIfEmpty(Mono.empty()); // Handle non-existent task
    }
}
