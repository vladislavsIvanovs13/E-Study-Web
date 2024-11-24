package com.work.e_study.controller;

import com.work.e_study.dto.EmployeeCourseDTO;
import com.work.e_study.service.EmployeeCourseService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RequestMapping("/employees")
@RestController
public class EmployeeCourseController {
    private EmployeeCourseService employeeCourseService;

    @GetMapping
    public List<EmployeeCourseDTO> getAllEmployeeCourses() {
        return employeeCourseService.getAllEmployeeCourses();
    }

    @PostMapping("/add")
    public void addEmployeeCourse(@RequestBody EmployeeCourseDTO employee) {
        employeeCourseService.addEmployeeCourse(employee);
    }

    @PutMapping("/update/{employeeId}/{courseId}")
    public void updateEmployeeCourse(@PathVariable int employeeId,
                               @PathVariable int courseId,
                               @RequestBody EmployeeCourseDTO employee) {
        employeeCourseService.updateEmployeeCourse(employeeId, courseId, employee);
    }

    @DeleteMapping("/delete/{employeeId}/{courseId}")
    public void deleteEmployeeCourse(@PathVariable int employeeId,
                                     @PathVariable int courseId) {
        employeeCourseService.deleteEmployeeCourse(employeeId, courseId);
    }
}
