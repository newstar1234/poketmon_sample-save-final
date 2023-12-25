package com.example.poketmon.dto.response;


import java.util.ArrayList;
import java.util.List;

import com.example.poketmon.entity.PoketEntity;


import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class PoketListResponseDto{
  
  private int poketmonNumber;
  private String name;
  private String type;
  private String specificity;
  private String characters;
  private String things;
  private int individualHp;
  private int individualAttack;
  private int individualDefence;
  private int individualSpecialAttack;
  private int individualSpecialDefence;
  private int individualSpeed;
  private int effortHp;
  private int effortAttack;
  private int effortDefence;
  private int effortSpecialAttack;
  private int effortSpecialDefence; 
  private int effortSpeed;
  private String technologyOne;
  private String technologyTwo;
  private String technologyThree;
  private String technologyFour;

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

  public static List<PoketListResponseDto> copyPoketList(List<PoketEntity> poketEntities) {
    List<PoketListResponseDto> poketList = new ArrayList<>();

    for(PoketEntity entity:poketEntities) {
      PoketListResponseDto poket = new PoketListResponseDto(entity);
      poketList.add(poket);
    }
    return poketList;
  }

}
