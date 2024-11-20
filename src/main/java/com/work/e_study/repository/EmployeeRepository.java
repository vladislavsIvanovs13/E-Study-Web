package com.work.e_study.repository;

import com.work.e_study.dto.EmployeeCourseDTO;
import com.work.e_study.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
    @Query("SELECT new com.work.e_study.dto.EmployeeCourseDTO(" +
            "e.id, e.employee, e.structuralUnit, e.room, e.email, c.title)" +
            "FROM Employee e JOIN e.courses c ORDER BY e.id")
    List<EmployeeCourseDTO> findAllEmployeesWithCourseTitles();

//    @Query("SELECT new com.work.e_study.dto.EmployeeCourseDTO(" +
//            "e.id, e.employee, e.structuralUnit, e.room, e.email, c.title)" +
//            "FROM Employee e JOIN e.courses c WHERE e.id = :id")
//    EmployeeCourseDTO findEmployeeById(@Param("id") int id);
    Optional<Employee> findByEmployee(String employee);
}
