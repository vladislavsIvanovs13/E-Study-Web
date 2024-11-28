package com.work.e_study.repository;

import com.work.e_study.dto.EmployeeCourseClassDTO;
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
            "e.id, e.employee, e.structuralUnit, e.room, e.email, c.id, c.title)" +
            "FROM Employee e JOIN e.courses c ORDER BY e.id")
    List<EmployeeCourseDTO> findAllEmployeesWithCourseTitles();

    @Query("SELECT new com.work.e_study.dto.EmployeeCourseDTO(" +
            "e.id, e.employee, e.structuralUnit, e.room, e.email, c.id, c.title)" +
            "FROM Employee e JOIN e.courses c WHERE e.id = :employeeId AND c.id = :courseId")
    EmployeeCourseDTO findEmployeeCourse(@Param("employeeId") int employeeId,
                                         @Param("courseId") int courseId);

    Optional<Employee> findByEmployee(String employee);

    @Query("SELECT new com.work.e_study.dto.EmployeeCourseClassDTO(" +
            "cl.id, cl.time, co.title, e.employee, cl.venue)" +
            "FROM Employee e JOIN e.courses co JOIN co.classes cl ORDER BY cl.id")
    List<EmployeeCourseClassDTO> findVenueInfo();
}
