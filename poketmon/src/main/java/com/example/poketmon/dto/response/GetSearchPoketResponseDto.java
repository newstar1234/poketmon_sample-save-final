package com.example.poketmon.dto.response;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.example.poketmon.common.response.ResponseCode;
import com.example.poketmon.common.response.ResponseMessage;
import com.example.poketmon.dto.ResponseDto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class GetSearchPoketResponseDto extends ResponseDto {

  private List<PoketListResponseDto> poketList;
  
  private GetSearchPoketResponseDto(String code, String message, List<PoketListResponseDto> poketList) {
    super(code, message);
    this.poketList = poketList;
  }

  public static ResponseEntity<GetSearchPoketResponseDto> success(List<PoketListResponseDto> poketList){
    GetSearchPoketResponseDto result = new GetSearchPoketResponseDto(ResponseCode.SUCCESS, ResponseMessage.SUCCESS, poketList);
    return ResponseEntity.status(HttpStatus.OK).body(result);
  }

}
