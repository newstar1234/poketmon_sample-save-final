package com.example.poketmon.service.Implement;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.poketmon.dto.ResponseDto;
import com.example.poketmon.dto.request.PatchPoketRequestDto;
import com.example.poketmon.dto.request.PostPoketRequestDto;
import com.example.poketmon.dto.response.DeletePoketResponseDto;
import com.example.poketmon.dto.response.GetPoketNameListResponseDto;
import com.example.poketmon.dto.response.GetPoketNameResponseDto;
import com.example.poketmon.dto.response.GetPoketResponseDto;
import com.example.poketmon.dto.response.GetSearchPoketResponseDto;
import com.example.poketmon.dto.response.PatchPoketResponseDto;
import com.example.poketmon.dto.response.PoketListResponseDto;
import com.example.poketmon.dto.response.PostPoketResponseDto;
import com.example.poketmon.entity.PoketEntity;
import com.example.poketmon.repository.PoketRepository;
import com.example.poketmon.repository.resultSet.GetPoketNameListResultSet;
import com.example.poketmon.repository.resultSet.GetPoketNameResultSet;
import com.example.poketmon.service.PoketService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PoketServiceImplement implements PoketService{

  private final PoketRepository poketRepository;
  
  @Override
  public ResponseEntity<? super PostPoketResponseDto> poketSave(PostPoketRequestDto dto) {

    try {
      PoketEntity poketEntity = new PoketEntity(dto);

      poketRepository.save(poketEntity);
      
    } catch (Exception exception) {
      exception.printStackTrace();
      return ResponseDto.databaseError();
    }

    return PostPoketResponseDto.success();

  }

  @Override
  public ResponseEntity<? super PatchPoketResponseDto> poketUpdate(Integer poketmonNumber, PatchPoketRequestDto dto) {

    try {

      PoketEntity poketEntity = poketRepository.findByPoketmonNumber(poketmonNumber);
      if(poketEntity == null) return PatchPoketResponseDto.fail();

      poketEntity.patch(dto);

      poketRepository.save(poketEntity);
      
    } catch (Exception exception) {
      exception.printStackTrace();
      return ResponseDto.databaseError();
    }

    return PatchPoketResponseDto.success();
  }

  @Override
  public ResponseEntity<? super DeletePoketResponseDto> poketDelete(Integer poketmonNumber) {

    try {

      // 존재하는지 확인 //
      PoketEntity poketEntity = poketRepository.findByPoketmonNumber(poketmonNumber);
      if(poketEntity == null) return DeletePoketResponseDto.fail();

      // 데이터 삭제 //
      poketRepository.delete(poketEntity);

      
    } catch (Exception exception) {
      exception.printStackTrace();
      return ResponseDto.databaseError();
    }
    return DeletePoketResponseDto.success();
  }

  @Override
  public ResponseEntity<? super GetPoketResponseDto> getPoket(Integer poketmonNumber) {

    PoketEntity poketEntity = null;

    try {
      poketEntity = poketRepository.findByPoketmonNumber(poketmonNumber);
      if(poketEntity == null) return GetPoketResponseDto.fail();

      poketRepository.save(poketEntity);
      
    } catch (Exception exception) {
      exception.printStackTrace();
      return ResponseDto.databaseError();
    }
    return GetPoketResponseDto.success(poketEntity);
  }

  @Override
  public ResponseEntity<? super GetPoketNameListResponseDto> getPoketNameList() {

    List<GetPoketNameListResultSet> resultSets = new ArrayList<>();

    try {

      resultSets = poketRepository.getPoketNameList();
      
    } catch (Exception exception) {
      exception.printStackTrace();
      return ResponseDto.databaseError();
    }
    return GetPoketNameListResponseDto.success(resultSets);
  }

  @Override
  public ResponseEntity<? super GetPoketNameResponseDto> getPoketName(Integer poketmonNumber) {

    GetPoketNameResultSet resultSet = null;

    try {

      resultSet = poketRepository.getPoketName(poketmonNumber);
      if(resultSet == null) return GetPoketNameResponseDto.fail();
      
    } catch (Exception exception) {
      exception.printStackTrace();
      return ResponseDto.databaseError();
    }
    return GetPoketNameResponseDto.success(resultSet);

  }

  @Override
  public ResponseEntity<? super GetSearchPoketResponseDto> getSearchPoket(String name) {

    List<PoketListResponseDto> poketList = null;

    try {

      List<PoketEntity> poketEntities = poketRepository.findByNameContainsOrderByPoketmonNumberDesc(name);
      
      poketList = PoketListResponseDto.copyPoketList(poketEntities);

    } catch (Exception exception) {
      exception.printStackTrace();
      return ResponseDto.databaseError();
    }

    return GetSearchPoketResponseDto.success(poketList);
  }
  
}
