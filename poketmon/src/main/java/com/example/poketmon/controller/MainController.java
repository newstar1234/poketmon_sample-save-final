package com.example.poketmon.controller;

import jakarta.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.poketmon.dto.request.PatchPoketRequestDto;
import com.example.poketmon.dto.request.PostPoketRequestDto;
import com.example.poketmon.dto.response.DeletePoketResponseDto;
import com.example.poketmon.dto.response.GetPoketNameListResponseDto;
import com.example.poketmon.dto.response.GetPoketResponseDto;
import com.example.poketmon.dto.response.PatchPoketResponseDto;
import com.example.poketmon.dto.response.PostPoketResponseDto;
import com.example.poketmon.service.PoketService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/poketmon")
@RequiredArgsConstructor
public class MainController {
  
  private final PoketService poketService;

  // 포켓몬 데이터 저장 //
  @PostMapping("/save")
  public ResponseEntity<? super PostPoketResponseDto> poketSave(
    @RequestBody @Valid PostPoketRequestDto requestBody
  ){
    ResponseEntity<? super PostPoketResponseDto> response = poketService.poketSave(requestBody);
    return response;
  }

  // 포켓몬 데이터 수정 //
  @PatchMapping("/{poketmonNumber}")
  public ResponseEntity<? super PatchPoketResponseDto> poketUpdate(
    @PathVariable(value = "poketmonNumber", required = true) Integer poketmonNumber,
    @RequestBody @Valid PatchPoketRequestDto requestBody
  ) {
    ResponseEntity<? super PatchPoketResponseDto> response = poketService.poketUpdate(poketmonNumber, requestBody);
    return response;
  }

  // 포켓몬 데이터 삭제 //
  @DeleteMapping("/{poketmonNumber}")
  public ResponseEntity<? super DeletePoketResponseDto> poketDelete(
    @PathVariable(value = "poketmonNumber", required = true) Integer poketmonNumber
  ) {   
    ResponseEntity<? super DeletePoketResponseDto> response = poketService.poketDelete(poketmonNumber);
    return response;
  }

  // 포켓몬 데이터 조회 //
  @GetMapping("/{poketmonNumber}")
  public ResponseEntity<? super GetPoketResponseDto> getPoket(
    @PathVariable(value = "poketmonNumber", required = true) Integer poketmonNumber
  ){
    ResponseEntity<? super GetPoketResponseDto> response = poketService.getPoket(poketmonNumber);
    return response;
  }

  // 포켓몬 이름 리스트 조회 //
  @GetMapping("/name-list")
  public ResponseEntity<? super GetPoketNameListResponseDto> getPoketNameList(
  ){
    ResponseEntity<? super GetPoketNameListResponseDto> response = poketService.getPoketNameList();
    return response;
  }
  
}
