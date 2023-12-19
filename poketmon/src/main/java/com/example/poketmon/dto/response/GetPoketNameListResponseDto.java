package com.example.poketmon.dto.response;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.example.poketmon.common.response.ResponseCode;
import com.example.poketmon.common.response.ResponseMessage;
import com.example.poketmon.dto.ResponseDto;
import com.example.poketmon.dto.object.PoketNameListItem;
import com.example.poketmon.repository.resultSet.GetPoketNameListResultSet;

import lombok.AllArgsConstructor;
import lombok.Getter;


@Getter
@AllArgsConstructor
public class GetPoketNameListResponseDto extends ResponseDto {
  
  private List<PoketNameListItem> poketNameList;

  private GetPoketNameListResponseDto (String code, String message, List<GetPoketNameListResultSet> resultSets) {
    super(code, message);
    this.poketNameList = PoketNameListItem.copyList(resultSets);
  }

  public static ResponseEntity<GetPoketNameListResponseDto> success(List<GetPoketNameListResultSet> resultSets) {
    GetPoketNameListResponseDto result = new GetPoketNameListResponseDto(ResponseCode.SUCCESS, ResponseMessage.SUCCESS, resultSets);
    return ResponseEntity.status(HttpStatus.OK).body(result);
  }


}
