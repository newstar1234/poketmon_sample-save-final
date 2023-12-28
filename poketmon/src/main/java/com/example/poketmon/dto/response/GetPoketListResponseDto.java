package com.example.poketmon.dto.response;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.example.poketmon.common.response.ResponseCode;
import com.example.poketmon.common.response.ResponseMessage;
import com.example.poketmon.dto.ResponseDto;

import lombok.Getter;

@Getter
public class GetPoketListResponseDto extends ResponseDto {

  List<PoketListResponseDto> poketList;

  private GetPoketListResponseDto(String code, String message, List<PoketListResponseDto> poketList) {
    super(code, message);
    this.poketList = poketList;
  }

  public static ResponseEntity<GetPoketListResponseDto> success(List<PoketListResponseDto> poketList) {
    GetPoketListResponseDto result = new GetPoketListResponseDto(ResponseCode.SUCCESS, ResponseMessage.SUCCESS, poketList);
    return ResponseEntity.status(HttpStatus.OK).body(result);
  }

}