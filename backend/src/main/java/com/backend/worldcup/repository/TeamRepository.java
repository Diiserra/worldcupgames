package com.backend.worldcup.repository;

import com.backend.worldcup.entities.Team;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TeamRepository extends JpaRepository<Team, Long>{
    
}
