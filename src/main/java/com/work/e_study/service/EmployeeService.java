package com.work.e_study.service;

import com.work.e_study.dto.EmployeeCourseDTO;
import com.work.e_study.exception.EmployeeNotFoundException;
import com.work.e_study.model.Course;
import com.work.e_study.model.Employee;
import com.work.e_study.repository.CourseRepository;
import com.work.e_study.repository.EmployeeRepository;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class EmployeeService {
    private EmployeeRepository employeeRepository;
    private CourseRepository courseRepository;

    public List<EmployeeCourseDTO> getAllEmployees() {
        return employeeRepository.findAllEmployeesWithCourseTitles();
    }

    @Transactional
    public void addEmployee(EmployeeCourseDTO employee) {
        Employee oldEmployee = employeeRepository.findByEmployee(employee.getEmployee()).orElse(null);
        Course oldCourse = courseRepository.findByTitle(employee.getTitle()).orElse(null);

        if (oldEmployee != null && oldCourse == null) {
            Course courseToAdd = new Course();
            courseToAdd.setTitle(employee.getTitle());

            updateEmployeeCourseTable(oldEmployee, courseToAdd);
        }

        if (oldEmployee == null && oldCourse != null) {
            Employee employeeToAdd = new Employee();
            employeeToAdd.setEmployee(employee.getEmployee());
            employeeToAdd.setStructuralUnit(employee.getStructuralUnit());
            employeeToAdd.setRoom(employee.getRoom());
            employeeToAdd.setEmail(employee.getEmail());

            updateEmployeeCourseTable(employeeToAdd, oldCourse);
        }

        if (oldEmployee == null && oldCourse == null) {
            Course courseToAdd = new Course();
            courseToAdd.setTitle(employee.getTitle());

            Employee employeeToAdd = new Employee();
            employeeToAdd.setEmployee(employee.getEmployee());
            employeeToAdd.setStructuralUnit(employee.getStructuralUnit());
            employeeToAdd.setRoom(employee.getRoom());
            employeeToAdd.setEmail(employee.getEmail());

            updateEmployeeCourseTable(employeeToAdd, courseToAdd);
        }

        if (oldEmployee != null && oldCourse != null) {
            updateEmployeeCourseTable(oldEmployee, oldCourse);
        }
    }

    private void updateEmployeeCourseTable(Employee employee, Course course) {
        employee.setCourses(Optional.ofNullable(employee.getCourses()).orElse(new ArrayList<>()));
        employee.getCourses().add(course);

        course.setEmployees(Optional.ofNullable(course.getEmployees()).orElse(new ArrayList<>()));
        course.getEmployees().add(employee);

        courseRepository.save(course);
        employeeRepository.save(employee);
    }

    @Transactional
    public void updateEmployee(int id, EmployeeCourseDTO updatedEmployee) {
        Employee employee = employeeRepository.findById(id).orElseThrow(
                () -> new EmployeeNotFoundException("Employee not found: " + id));

        employee.setEmployee(updatedEmployee.getEmployee());
        employee.setStructuralUnit(updatedEmployee.getStructuralUnit());
        employee.setRoom(updatedEmployee.getRoom());
        employee.setEmail(updatedEmployee.getEmail());

        Course course = employee.getCourses().getFirst();
        course.setTitle(updatedEmployee.getTitle());

        employeeRepository.save(employee);
        courseRepository.save(course);
    }

    @Transactional
    public void deleteEmployee(int id) {
        Employee employee = employeeRepository.findById(id).orElseThrow(
                () -> new EmployeeNotFoundException("Employee not found: " + id));
        employeeRepository.delete(employee);
    }
}
