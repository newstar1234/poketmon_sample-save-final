package com.example.poketmon.dto.response.poket;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.example.poketmon.common.response.ResponseCode;
import com.example.poketmon.common.response.ResponseMessage;
import com.example.poketmon.dto.ResponseDto;

import lombok.Getter;

@Getter
public class DeletePoketResponseDto extends ResponseDto{
  
  private DeletePoketResponseDto(){
    super(ResponseCode.SUCCESS, ResponseMessage.SUCCESS);
  }

  public static ResponseEntity<DeletePoketResponseDto> success(){
    DeletePoketResponseDto result = new DeletePoketResponseDto();
    return ResponseEntity.status(HttpStatus.OK).body(result);
  }

  public static ResponseEntity<ResponseDto> fail(){
    ResponseDto result = new ResponseDto(ResponseCode.FAIL, ResponseMessage.FAIL);
    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(result);
  }

}
