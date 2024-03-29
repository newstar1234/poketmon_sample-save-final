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

import com.example.poketmon.dto.request.poket.PatchPoketRequestDto;
import com.example.poketmon.dto.request.poket.PostPoketRequestDto;
import com.example.poketmon.dto.response.poket.DeletePoketResponseDto;
import com.example.poketmon.dto.response.poket.GetPoketListResponseDto;
import com.example.poketmon.dto.response.poket.GetPoketResponseDto;
import com.example.poketmon.dto.response.poket.GetSearchPoketResponseDto;
import com.example.poketmon.dto.response.poket.PatchPoketResponseDto;
import com.example.poketmon.dto.response.poket.PostPoketResponseDto;
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

  // 포켓몬 데이터 조회(번호) //
  @GetMapping("/{poketmonNumber}")
  public ResponseEntity<? super GetPoketResponseDto> getPoket(
    @PathVariable(value = "poketmonNumber", required = true) Integer poketmonNumber
  ){
    ResponseEntity<? super GetPoketResponseDto> response = poketService.getPoket(poketmonNumber);
    return response;
  }

  // 포켓몬 리스트 조회 //
  @GetMapping("/list/{section}")
  public ResponseEntity<? super GetPoketListResponseDto> getPoketList(
    @PathVariable Integer section
  ){
    ResponseEntity<? super GetPoketListResponseDto> response = poketService.getPoketList(section);
    return response;
  }

  // 검색 //
  @GetMapping("/search/{name}")
  public ResponseEntity<? super GetSearchPoketResponseDto> getSearch(
    @PathVariable("name") String name
  ){
    ResponseEntity<? super GetSearchPoketResponseDto> response = poketService.getSearch(name);
    return response;
  }
}
