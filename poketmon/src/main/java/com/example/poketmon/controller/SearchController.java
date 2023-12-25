package com.example.poketmon.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.poketmon.dto.response.GetSearchPoketResponseDto;
import com.example.poketmon.service.PoketService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("api/search")
@RequiredArgsConstructor
public class SearchController {

  private final PoketService poketService;
  
 
}
