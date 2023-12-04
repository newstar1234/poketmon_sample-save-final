package com.example.poketmon.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "poket_list_view")
@Table(name = "poket_list_view")
public class PoketListEntity {
  
  @Id
  private int poketmonNumber;

  private String name;

}
