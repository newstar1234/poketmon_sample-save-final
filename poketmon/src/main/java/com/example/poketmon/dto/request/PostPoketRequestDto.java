package com.example.poketmon.dto.request;

import javax.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class PostPoketRequestDto {
  
  @NotBlank
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

}
