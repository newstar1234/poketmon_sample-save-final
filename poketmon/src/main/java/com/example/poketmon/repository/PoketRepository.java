package com.example.poketmon.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.poketmon.entity.PoketEntity;

@Repository
public interface PoketRepository extends JpaRepository<PoketEntity, Integer>{

  PoketEntity findByName(String name);

  PoketEntity findByPoketmonNumber(Integer poketmonNumber);
  
}
