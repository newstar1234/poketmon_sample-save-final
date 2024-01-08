package com.example.poketmon.entity;

import com.example.poketmon.dto.request.PatchPoketRequestDto;
import com.example.poketmon.dto.request.PostPoketRequestDto;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "poketmon")
@Table(name = "poketmon")
public class PoketEntity {
  
  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
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

  public PoketEntity(PostPoketRequestDto dto) {
    this.name = dto.getName();
    this.type = dto. getType();
    this.specificity = dto.getSpecificity();
    this.characters = dto.getCharacters();
    this.things = dto.getThings();
    this.individualHp = dto.getIndividualHp();
    this.individualAttack = dto.getIndividualAttack();
    this.individualDefence = dto.getIndividualDefence();
    this.individualSpecialAttack = dto.getIndividualSpecialAttack();
    this.individualSpecialDefence = dto.getIndividualSpecialDefence();
    this.individualSpeed = dto.getIndividualSpeed();
    this.effortHp = dto.getEffortHp();
    this.effortAttack = dto.getEffortAttack();
    this.effortDefence = dto.getEffortDefence();
    this.effortSpecialAttack = dto.getEffortSpecialAttack();
    this.effortSpecialDefence = dto.getEffortSpecialDefence();
    this.effortSpeed = dto.getEffortSpeed();
    this.technologyOne = dto.getTechnologyOne();
    this.technologyTwo = dto.getTechnologyTwo();
    this.technologyThree = dto.getTechnologyThree();
    this.technologyFour = dto.getTechnologyFour();
  }
  
  // 수정 // 
  public void patch(PatchPoketRequestDto dto) {
    this.name = dto.getName();
    this.type = dto. getType();
    this.specificity = dto.getSpecificity();
    this.characters = dto.getCharacters();
    this.things = dto.getThings();
    this.individualHp = dto.getIndividualHp();
    this.individualAttack = dto.getIndividualAttack();
    this.individualDefence = dto.getIndividualDefence();
    this.individualSpecialAttack = dto.getIndividualSpecialAttack();
    this.individualSpecialDefence = dto.getIndividualSpecialDefence();
    this.individualSpeed = dto.getIndividualSpeed();
    this.effortHp = dto.getEffortHp();
    this.effortAttack = dto.getEffortAttack();
    this.effortDefence = dto.getEffortDefence();
    this.effortSpecialAttack = dto.getEffortSpecialAttack();
    this.effortSpecialDefence = dto.getEffortSpecialDefence();
    this.effortSpeed = dto.getEffortSpeed();
    this.technologyOne = dto.getTechnologyOne();
    this.technologyTwo = dto.getTechnologyTwo();
    this.technologyThree = dto.getTechnologyThree();
    this.technologyFour = dto.getTechnologyFour();
  }

}
