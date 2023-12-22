package com.example.poketmon.dto.response;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.example.poketmon.common.response.ResponseCode;
import com.example.poketmon.common.response.ResponseMessage;
import com.example.poketmon.dto.ResponseDto;
import com.example.poketmon.repository.resultSet.GetPoketNameResultSet;

import lombok.Getter;

@Getter
public class GetPoketNameResponseDto extends ResponseDto {
  
  private int poketmonNumber;
  private String name;

  private GetPoketNameResponseDto(String code, String message,GetPoketNameResultSet resultSet) {
    super(code, message);
    this.poketmonNumber = resultSet.getPoketmonNumber();
    this.name = resultSet.getName();
  }

  public static ResponseEntity<GetPoketNameResponseDto> success(GetPoketNameResultSet resultSet) {
    GetPoketNameResponseDto result = new GetPoketNameResponseDto(ResponseCode.SUCCESS, ResponseMessage.SUCCESS, resultSet);
    return ResponseEntity.status(HttpStatus.OK).body(result);
  }
  public static ResponseEntity<ResponseDto> fail() {
    ResponseDto result = new ResponseDto();
    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(result);
  }

}
