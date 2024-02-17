package com.example.poketmon.dto.request.poket;

import jakarta.validation.constraints.NotBlank;
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

}
