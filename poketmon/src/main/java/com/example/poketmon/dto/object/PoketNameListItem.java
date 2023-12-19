package com.example.poketmon.dto.object;

import java.util.ArrayList;
import java.util.List;

import com.example.poketmon.repository.resultSet.GetPoketNameListResultSet;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class PoketNameListItem {
  
  private String name;

  public PoketNameListItem(GetPoketNameListResultSet resultSet) {
    this.name = resultSet.getName();
  }

  public static List<PoketNameListItem> copyList(List<GetPoketNameListResultSet> resultSets) {
    List<PoketNameListItem> list = new ArrayList<>();

    for(GetPoketNameListResultSet resultSet: resultSets) {
      PoketNameListItem poketNameListItem = new PoketNameListItem(resultSet);
      list.add(poketNameListItem);
    }
    return list;
  }

}
