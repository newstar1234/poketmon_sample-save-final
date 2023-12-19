package com.example.poketmon.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.poketmon.entity.PoketEntity;
import com.example.poketmon.repository.resultSet.GetPoketNameListResultSet;

@Repository
public interface PoketRepository extends JpaRepository<PoketEntity, Integer>{

  PoketEntity findByPoketmonNumber(Integer poketmonNumber);

  @Query(
    value = 
    "SELECT " +  
    "poketmon_number AS poketmonNumber, " +
    "name AS name " +
    "from poketmon " +
    "ORDER BY poketmonNumber DESC ",
    nativeQuery = true
  )
  List<GetPoketNameListResultSet> getPoketNameList();
  
}
