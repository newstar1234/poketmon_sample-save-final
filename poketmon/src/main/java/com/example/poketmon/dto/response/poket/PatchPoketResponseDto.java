package com.example.poketmon.dto.response.poket;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.example.poketmon.common.response.ResponseCode;
import com.example.poketmon.common.response.ResponseMessage;
import com.example.poketmon.dto.ResponseDto;

import lombok.Getter;

@Getter
public class PatchPoketResponseDto extends ResponseDto {
  
  private PatchPoketResponseDto () {
    super(ResponseCode.SUCCESS, ResponseMessage.SUCCESS);
  }

  public static ResponseEntity<PatchPoketResponseDto> success(){
    PatchPoketResponseDto result = new PatchPoketResponseDto();
    return ResponseEntity.status(HttpStatus.OK).body(result);
  }

  public static ResponseEntity<ResponseDto> fail(){
    ResponseDto result = new ResponseDto(ResponseCode.FAIL, ResponseMessage.FAIL);
    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(result);
  }

}
