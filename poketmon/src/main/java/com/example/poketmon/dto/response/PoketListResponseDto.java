package com.example.poketmon.dto.response;
import java.util.ArrayList;
import java.util.List;

import com.example.poketmon.entity.PoketListEntity;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class PoketListResponseDto {
  
  private int poketmonNumber;
  private String name;

  public PoketListResponseDto(PoketListEntity poketListEntity) {
    this.poketmonNumber = poketListEntity.getPoketmonNumber();
    this.name = poketListEntity.getName();
  }

  public static List<PoketListResponseDto> copyEntityList(List<PoketListEntity> poketListEntities) {
    List<PoketListResponseDto> poketList = new ArrayList<>();

    for(PoketListEntity entity: poketListEntities) {
      PoketListResponseDto poket = new PoketListResponseDto(entity);
      poketList.add(poket);
    }
    return poketList;
  }

}
