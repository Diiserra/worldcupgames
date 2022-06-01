package com.backend.worldcup.entities;

import java.io.Serializable;

public class Team implements Serializable{
    
    private static final long serialVersionUID = 1L;

    private Long id;
    private String name;
    private String country;
    private String initials;

    private Group group;

    public Team() {
    }

    public Team(Long id, String name, String country, String initials, Group group) {
        this.id = id;
        this.name = name;
        this.country = country;
        this.initials = initials;
        this.group = group;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getInitials() {
        return initials;
    }

    public void setInitials(String initials) {
        this.initials = initials;
    }

    public Group getGroup() {
        return group;
    }

    public void setGroup(Group group) {
        this.group = group;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        result = prime * result + ((initials == null) ? 0 : initials.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Team other = (Team) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        if (initials == null) {
            if (other.initials != null)
                return false;
        } else if (!initials.equals(other.initials))
            return false;
        return true;
    }

    
}
