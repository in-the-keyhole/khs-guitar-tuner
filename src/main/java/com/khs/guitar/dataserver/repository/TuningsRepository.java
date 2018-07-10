package com.khs.guitar.dataserver.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.khs.guitar.dataserver.model.Tunings;

@RepositoryRestResource(collectionResourceRel = "tunings", path = "tunings")
public interface TuningsRepository extends JpaRepository<Tunings,Long> {

}
