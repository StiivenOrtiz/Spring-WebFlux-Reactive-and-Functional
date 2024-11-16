package com.yordles.spring_webflux_app.config;

import org.springframework.context.annotation.Bean;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;

public class OpenAPIConfig {
    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("Spring Webflux App")
                        .version("1.0.0")
                        .description("Spring Webflux App API Documentation")
                        .termsOfService("http://swagger.io/terms/"));
    }
    
}
