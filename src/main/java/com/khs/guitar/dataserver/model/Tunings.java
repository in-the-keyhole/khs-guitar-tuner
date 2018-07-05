package com.khs.guitar.dataserver.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
//import javax.validation.constraints.NotNull;

@Entity
@Table(name="tunings")
public class Tunings {
	
	@Id
	@Column(name="tuning_id")
	private long id;
	
	//@NotNull
	@Column(name="tuning_description", nullable=false)
	private String description;
	
	//@NotNull
	@Column(name="tuning_notes", nullable=false)
	private String notes;
	
	public Long getId() {
        return id;
    }
	
	public void setId(Long id) {
        this.id = id;
    }
	
	public String getDescription() {
        return description;
    }
	
	public Tunings setDescription(String userDescription) {
        this.description = userDescription;
        return this;
    }
	
	public String getNotes() {
        return notes;
    }
	
	public Tunings setNotes(String userNotes) {
        this.notes = userNotes;
        return this;
    }
}