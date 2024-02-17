package com.example.poketmon.dto.response.poket;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.example.poketmon.common.response.ResponseCode;
import com.example.poketmon.common.response.ResponseMessage;
import com.example.poketmon.dto.ResponseDto;

import lombok.Getter;

@Getter
public class GetSearchPoketResponseDto extends ResponseDto {
  
  private List<PoketListResponseDto> poketList;

  private GetSearchPoketResponseDto(List<PoketListResponseDto> poketEntities) {
    super(ResponseCode.SUCCESS, ResponseMessage.SUCCESS);
    this.poketList = poketEntities;
  }

  public static ResponseEntity<GetSearchPoketResponseDto> success(List<PoketListResponseDto> poketEntities) {
    GetSearchPoketResponseDto result = new GetSearchPoketResponseDto(poketEntities);
    return ResponseEntity.status(HttpStatus.OK).body(result);
  }

}
