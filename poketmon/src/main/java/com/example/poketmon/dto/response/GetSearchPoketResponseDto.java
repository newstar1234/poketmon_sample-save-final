package com.example.poketmon.dto.response;

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

  private GetSearchPoketResponseDto(String code, String message, List<PoketListResponseDto> poketEntities) {
    super(code, message);
    this.poketList = poketEntities;
  }

  public static ResponseEntity<GetSearchPoketResponseDto> success(List<PoketListResponseDto> poketEntities) {
    GetSearchPoketResponseDto result = new GetSearchPoketResponseDto(ResponseCode.SUCCESS, ResponseMessage.SUCCESS, poketEntities);
    return ResponseEntity.status(HttpStatus.OK).body(result);
  }

}
