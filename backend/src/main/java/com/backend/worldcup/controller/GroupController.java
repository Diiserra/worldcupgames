package com.backend.worldcup.controller;

import java.util.Optional;

import com.backend.worldcup.entities.Group;
import com.backend.worldcup.repository.GroupRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GroupController {

    @Autowired
    private GroupRepository groupRepository;

    @GetMapping("/group/{id}")
    public ResponseEntity<Group> listAll(@PathVariable Long id) {
        Optional<Group> group =  groupRepository.findById(id);
        if (group.isPresent()) {
            return ResponseEntity.ok().body(group.get());
        }
        return ResponseEntity.notFound().build();
    }

}
