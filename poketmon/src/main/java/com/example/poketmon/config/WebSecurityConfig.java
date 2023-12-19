package com.example.poketmon.config;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.example.poketmon.filter.JwtAuthenticationFilter;

import lombok.RequiredArgsConstructor;

@Configurable
@EnableWebSecurity
@RequiredArgsConstructor
public class WebSecurityConfig {
    
    private final JwtAuthenticationFilter jwtAuthenticationFilter;

    @Bean
    protected SecurityFilterChain configure(HttpSecurity httpSecurity) throws Exception {

        httpSecurity
                .cors().and()
                .csrf().disable()
                .httpBasic().disable()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
                .authorizeRequests()
                .antMatchers("/", "/api/poketmon/**", "/file/**").permitAll()
                .antMatchers(HttpMethod.GET,"/api/poketmon/*").permitAll()
                .anyRequest().authenticated().and()
                .exceptionHandling().authenticationEntryPoint(new FailedAuthenticationEntryPoint());

        httpSecurity.addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

        return httpSecurity.build();
            
    }

}

//! 토큰 잘못입력한 경우 //
class FailedAuthenticationEntryPoint implements AuthenticationEntryPoint {

    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response,
            AuthenticationException authException) throws IOException, ServletException {

        response.setContentType("application/json");
        response.setStatus(HttpServletResponse.SC_FORBIDDEN);
        response.getWriter().write("{\"code\":\"AF\", \"message\":\"Authorization Failed\"}");
    }

} 
