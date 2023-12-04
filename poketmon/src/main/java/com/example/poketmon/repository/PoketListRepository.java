package com.example.poketmon.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.poketmon.entity.PoketListEntity;


@Repository
public interface PoketListRepository extends JpaRepository<PoketListEntity, Integer> {
  
  @Query(
    value =  
    "SELECT " + 
    "poketmon_number AS poketmon_number, " +
    "name AS name " +
    "from poketmon " +
    "ORDER BY poketmon_number DESC ",
    nativeQuery = true
  )
  List<PoketListEntity> getPoketList(Integer poketmonNumber);

}
