package com.work.e_study.config;

import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@org.springframework.context.annotation.Configuration
public class Configuration {
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/employees/**")
                        .allowedOrigins("http://localhost:3000") // React app's URL
                        .allowedMethods("GET", "POST", "PUT", "DELETE");
            }
        };
    }
}
