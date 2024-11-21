package com.work.e_study.controller;

import com.work.e_study.dto.EmployeeCourseDTO;
import com.work.e_study.model.Employee;
import com.work.e_study.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RequestMapping("/employees")
@RestController
public class EmployeeController {
    private EmployeeService employeeService;

    @GetMapping
    public List<EmployeeCourseDTO> getAllEmployees() {
        return employeeService.getAllEmployees();
    }

    @PostMapping("/add")
    public void addEmployee(@RequestBody EmployeeCourseDTO employee) {
        employeeService.addEmployee(employee);
    }

    @PutMapping("/update/{id}")
    public void updateEmployee(@PathVariable int id, @RequestBody EmployeeCourseDTO employee) {
        employeeService.updateEmployee(id, employee);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteEmployee(@PathVariable int id) {
        employeeService.deleteEmployee(id);
    }
}
