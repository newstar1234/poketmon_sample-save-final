package com.example.poketmon.dto.response;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.example.poketmon.common.response.ResponseCode;
import com.example.poketmon.common.response.ResponseMessage;
import com.example.poketmon.dto.ResponseDto;
import com.example.poketmon.entity.PoketEntity;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class GetPoketResponseDto extends ResponseDto {
  
  private String name;
  private String type;
  private String specificity;
  private String characters;
  private String things;
  private String individualHp;
  private String individualAttack;
  private String individualDefence;
  private String individualSpecialAttack;
  private String individualSpecialDefence;
  private String individualSpeed;
  private String effortHp;
  private String effortAttack;
  private String effortDefence;
  private String effortSpecialAttack;
  private String effortSpecialDefence; 
  private String effortSpeed;
  private String technologyOne;
  private String technologyTwo;
  private String technologyThree;
  private String technologyFour;

  private GetPoketResponseDto(String code, String message, PoketEntity poketEntity) {
    super(code, message);
    this.name = poketEntity.getName();
    this.type = poketEntity. getType();
    this.specificity = poketEntity.getSpecificity();
    this.characters = poketEntity.getCharacters();
    this.things = poketEntity.getThings();
    this.individualHp = poketEntity.getIndividualHp();
    this.individualAttack = poketEntity.getIndividualAttack();
    this.individualDefence = poketEntity.getIndividualDefence();
    this.individualSpecialAttack = poketEntity.getIndividualSpecialAttack();
    this.individualSpecialDefence = poketEntity.getIndividualSpecialDefence();
    this.individualSpeed = poketEntity.getIndividualSpeed();
    this.effortHp = poketEntity.getEffortHp();
    this.effortAttack = poketEntity.getEffortAttack();
    this.effortDefence = poketEntity.getEffortDefence();
    this.effortSpecialAttack = poketEntity.getEffortSpecialAttack();
    this.effortSpecialDefence = poketEntity.getEffortSpecialDefence();
    this.effortSpeed = poketEntity.getEffortSpeed();
    this.technologyOne = poketEntity.getTechnologyOne();
    this.technologyTwo = poketEntity.getTechnologyTwo();
    this.technologyThree = poketEntity.getTechnologyThree();
    this.technologyFour = poketEntity.getTechnologyFour();
  }

  public static ResponseEntity<GetPoketResponseDto> success(PoketEntity poketEntity){
    GetPoketResponseDto result = new GetPoketResponseDto(ResponseCode.SUCCESS, ResponseMessage.SUCCESS, poketEntity);
    return ResponseEntity.status(HttpStatus.OK).body(result);
  }

  public static ResponseEntity<ResponseDto> fail() {
    ResponseDto result = new ResponseDto(ResponseCode.FAIL, ResponseMessage.FAIL);
    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(result);
  }
}
