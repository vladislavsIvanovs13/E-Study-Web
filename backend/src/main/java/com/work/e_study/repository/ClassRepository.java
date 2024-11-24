package com.work.e_study.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.work.e_study.model.Class;
import org.springframework.stereotype.Repository;

@Repository
public interface ClassRepository extends JpaRepository<Class, Integer> {
}
