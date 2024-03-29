package com.example.poketmon.service;

import org.springframework.http.ResponseEntity;

import com.example.poketmon.dto.request.poket.PatchPoketRequestDto;
import com.example.poketmon.dto.request.poket.PostPoketRequestDto;
import com.example.poketmon.dto.response.poket.DeletePoketResponseDto;
import com.example.poketmon.dto.response.poket.GetPoketListResponseDto;
import com.example.poketmon.dto.response.poket.GetPoketResponseDto;
import com.example.poketmon.dto.response.poket.GetSearchPoketResponseDto;
import com.example.poketmon.dto.response.poket.PatchPoketResponseDto;
import com.example.poketmon.dto.response.poket.PostPoketResponseDto;

public interface PoketService {
  
  // 포켓몬 데이터 저장 //
  ResponseEntity<? super PostPoketResponseDto> poketSave(PostPoketRequestDto dto);
  // 포켓몬 데이터 수정 //
  ResponseEntity<? super PatchPoketResponseDto> poketUpdate(Integer poketmonNumber, PatchPoketRequestDto dto);
  // 포켓몬 데이터 삭제 //
  ResponseEntity<? super DeletePoketResponseDto> poketDelete(Integer poketmonNumber);
  // 포켓몬 데이터 조회 //
  ResponseEntity<? super GetPoketResponseDto> getPoket(Integer poketmonNumber);

  // 포켓몬 리스트 조회 //
  ResponseEntity<? super GetPoketListResponseDto> getPoketList(Integer section);

  // 검색 //
  ResponseEntity<? super GetSearchPoketResponseDto> getSearch(String name);
}
