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
        Course addedCourse = new Course();
        addedCourse.setTitle(employee.getTitle());

        Employee addedEmployee = new Employee();
        addedEmployee.setEmployee(employee.getEmployee());
        addedEmployee.setStructuralUnit(employee.getStructuralUnit());
        addedEmployee.setRoom(employee.getRoom());
        addedEmployee.setEmail(employee.getEmail());

        if (addedEmployee.getCourses() == null) {
            List<Course> courses = new ArrayList<>();
            courses.add(addedCourse);
            addedEmployee.setCourses(courses);
        }

        if (addedCourse.getEmployees() == null) {
            List<Employee> employees = new ArrayList<>();
            employees.add(addedEmployee);
            addedCourse.setEmployees(employees);
        }

        employeeRepository.save(addedEmployee);
        courseRepository.save(addedCourse);
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
        Course course = employee.getCourses().getFirst();

        employeeRepository.delete(employee);
        courseRepository.delete(course);
    }
}
