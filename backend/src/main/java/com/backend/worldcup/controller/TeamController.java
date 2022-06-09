package com.backend.worldcup.controller;

import java.util.Optional;

import com.backend.worldcup.entities.Team;
import com.backend.worldcup.repository.TeamRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TeamController {
    
    @Autowired
    private TeamRepository teamRepository;

    @GetMapping("/team/{id}")
    public ResponseEntity<Team> getTeamById(@PathVariable Long id) {
        Optional<Team> team = teamRepository.findById(id);

        if (team.isPresent()) {
            return ResponseEntity.ok().body(team.get());
        }

        return ResponseEntity.notFound().build();
    }

}
