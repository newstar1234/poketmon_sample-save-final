package com.example.poketmon.config;

import java.io.IOException;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.CsrfConfigurer;
import org.springframework.security.config.annotation.web.configurers.HttpBasicConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.example.poketmon.filter.JwtAuthenticationFilter;

import lombok.RequiredArgsConstructor;

@Configurable // 어노테이션 빈을 등록할수 있도록 만들어줌
@Configuration // 빈을 가지고 있는 클래스다
@EnableWebSecurity
@RequiredArgsConstructor
public class WebSecurityConfig {
    
    private final JwtAuthenticationFilter jwtAuthenticationFilter;

    @Bean
    protected SecurityFilterChain configure(HttpSecurity httpSecurity) throws Exception {

        httpSecurity
        .cors(cors -> cors
              .configurationSource(corsConfigrationSource())
        )
        .csrf(CsrfConfigurer::disable)
        .httpBasic(HttpBasicConfigurer::disable)
        .sessionManagement(sesstionManagement -> sesstionManagement
              .sessionCreationPolicy(SessionCreationPolicy.STATELESS) // 상태를 유지하지 않겠다
        ) // 어떤 부분(요청)에서 인증을 거칠것인지 // 어떤 부분에서 권한이 있는 사람을 허용할건지
        .authorizeHttpRequests(request -> request
              .requestMatchers("/", "/api/poketmon/**", "/api/poketmon/list/**").permitAll()
              .requestMatchers(HttpMethod.GET, "/api/poketmon/**", "/api/poketmon/list/**").permitAll()
              .anyRequest().authenticated()
        ) // 인가 실패의 경우 
        .exceptionHandling(exceptionHandling -> exceptionHandling
              .authenticationEntryPoint(new FailedAuthenticationEntryPoint())
        )
        .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
    return httpSecurity.build();
            
    }

    @Bean
    protected CorsConfigurationSource corsConfigrationSource() {
      
      CorsConfiguration configuration = new CorsConfiguration(); // 인스턴스 생성
      configuration.addAllowedOrigin("*"); // 모든 출처에 대해서 허용
      configuration.addAllowedMethod("*"); // 모든 메소드에 대해서 허용
      configuration.addAllowedHeader("*"); // 모든 헤더에 대해서 허용

      UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
      source.registerCorsConfiguration("/**", configuration); // 어떤패턴에 대해서 적용? => (모든패턴)

      return source;
  }

}

//! 인가 실패 //
class FailedAuthenticationEntryPoint implements AuthenticationEntryPoint {

    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response,
            AuthenticationException authException) throws IOException, ServletException {

        response.setContentType("application/json");
        response.setStatus(HttpServletResponse.SC_FORBIDDEN);
        response.getWriter().write("{\"code\":\"AF\", \"message\":\"Authorization Failed\"}");
    }

} 
