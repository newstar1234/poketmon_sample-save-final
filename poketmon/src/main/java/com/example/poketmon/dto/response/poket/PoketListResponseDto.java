package com.example.poketmon.dto.response.poket;

import java.util.ArrayList;
import java.util.List;

import com.example.poketmon.entity.PoketEntity;
import com.example.poketmon.repository.resultSet.PoketListResultSet;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class PoketListResponseDto{
  
  private int poketmonNumber;
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

  public PoketListResponseDto(PoketListResultSet resultSet) {
    this.poketmonNumber = resultSet.getPoketmonNumber();
    this.name = resultSet.getName();
    this.type = resultSet. getType();
    this.specificity = resultSet.getSpecificity();
    this.characters = resultSet.getCharacters();
    this.things = resultSet.getThings();
    this.individualHp = resultSet.getIndividualHp();
    this.individualAttack = resultSet.getIndividualAttack();
    this.individualDefence = resultSet.getIndividualDefence();
    this.individualSpecialAttack = resultSet.getIndividualSpecialAttack();
    this.individualSpecialDefence = resultSet.getIndividualSpecialDefence();
    this.individualSpeed = resultSet.getIndividualSpeed();
    this.effortHp = resultSet.getEffortHp();
    this.effortAttack = resultSet.getEffortAttack();
    this.effortDefence = resultSet.getEffortDefence();
    this.effortSpecialAttack = resultSet.getEffortSpecialAttack();
    this.effortSpecialDefence = resultSet.getEffortSpecialDefence();
    this.effortSpeed = resultSet.getEffortSpeed();
    this.technologyOne = resultSet.getTechnologyOne();
    this.technologyTwo = resultSet.getTechnologyTwo();
    this.technologyThree = resultSet.getTechnologyThree();
    this.technologyFour = resultSet.getTechnologyFour();
  }

  public static List<PoketListResponseDto> copyPoketList(List<PoketListResultSet> resultSets) {
    List<PoketListResponseDto> poketList = new ArrayList<>();

    for(PoketListResultSet entity:resultSets) {
      PoketListResponseDto poket = new PoketListResponseDto(entity);
      poketList.add(poket);
    }
    return poketList;
  }

  // 수정 //
   public PoketListResponseDto(PoketEntity poketEntity) {
    this.poketmonNumber = poketEntity.getPoketmonNumber();
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

  public static List<PoketListResponseDto> getSearchList(List<PoketEntity> poketEntity) {
    List<PoketListResponseDto> poketList = new ArrayList<>();

    for(PoketEntity entity:poketEntity) {
      PoketListResponseDto poket = new PoketListResponseDto(entity);
      poketList.add(poket);
    }
    return poketList;
  }
}
