# Use Maven with OpenJDK 17 to build the application
FROM maven:3.9.9-eclipse-temurin-17-alpine AS build

# Set the working directory
WORKDIR /app

# Copy the project files into the container
COPY pom.xml .
COPY src ./src

# Build the application without running tests
RUN mvn clean package -DskipTests

# Use OpenJDK 17 runtime to run the application
FROM openjdk:17-alpine

# Set the working directory
WORKDIR /app

# Copy the jar file from the build stage
COPY --from=build /app/target/*.jar app.jar

# Expose port 8080
EXPOSE 8080

# Run the application
CMD ["java", "-jar", "app.jar"]