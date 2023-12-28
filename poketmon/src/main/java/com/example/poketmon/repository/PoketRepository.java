package com.example.poketmon.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.poketmon.dto.response.PoketListResponseDto;
import com.example.poketmon.entity.PoketEntity;
import com.example.poketmon.repository.resultSet.PoketListResultSet;

@Repository
public interface PoketRepository extends JpaRepository<PoketEntity, Integer>{

  PoketEntity findByPoketmonNumber(Integer poketmonNumber);

  @Query(
    value = 
      "SELECT " +
      "P.poketmon_number AS poketmonNumber, " +
      "P.name AS name, " +
      "P.type AS type, " +
      "P.specificity AS specificity, " +
      "P.characters AS characters, " +
      "P.things AS things, " +
      "P.individual_hp AS individualHp, " +
      "P.individual_attack AS individualAttack, " +
      "P.individual_defence AS individualDefence, " +
      "P.individual_special_attack AS individualSpecialAttack, " +
      "P.individual_special_defence AS individualSpecialDefence, " +
      "P.individual_speed AS individualSpeed, " +
      "P.effort_hp AS effortHp, " +
      "P.effort_attack AS effortAttack, " +
      "P.effort_defence AS effortDefence, " +
      "P.effort_special_attack AS effortSpecialAttack, " +
      "P.effort_special_defence AS effortSpecialDefence, " +
      "P.effort_speed AS effortSpeed, " +
      "P.technology_one AS technologyOne, " +
      "P.technology_two AS technologyTwo, " +
      "P.technology_three AS technologyThree, " +
      "P.technology_four AS technologyFour " +
      "from poketmon AS P " +
      "ORDER BY poketmon_number DESC " +
      "LIMIT ?1, 50 ",
    nativeQuery = true
  )
  List<PoketListResultSet> getPoketList(Integer poketmonNumber);

  // 검색어 //
  List<PoketEntity> findByNameContainsOrderByPoketmonNumberDesc(String name);

}
