package com.backend.worldcup.repository;

import com.backend.worldcup.entities.Group;

import org.springframework.data.jpa.repository.JpaRepository;

public interface GroupRepository extends JpaRepository<Group, Long>{
    
}
