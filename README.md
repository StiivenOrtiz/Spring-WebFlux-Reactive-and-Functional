# Spring WebFlux

Simple example of a Spring WebFlux application. The application exposes a REST API to manage a list of users and their tasks.

## Reactive Programming

The application uses the reactive programming model provided by Spring WebFlux. The reactive programming model is based on the Reactive Streams specification, which is a standard for asynchronous stream processing with non-blocking backpressure.

The main components of the reactive programming in this API are:

- **Mono**: Represents a single value or an error. It is a publisher that emits at most one item. It is used to represent the result of an asynchronous computation.

- **Flux**: Represents a stream of 0 or more values. It is a publisher that emits 0 or more items. It is used to represent the result of an asynchronous computation that may emit multiple values.

## Running the Application

Run the docker-compose file to start the application:

```bash
docker-compose up -d --build
```

Stop the application and delete the volumes:

```bash
docker-compose down -v
```

The application will be available at `http://localhost:8080`.

## API Endpoints

To see the API documentation, access the Swagger UI at `http://localhost:8080/swagger-ui.html`.
