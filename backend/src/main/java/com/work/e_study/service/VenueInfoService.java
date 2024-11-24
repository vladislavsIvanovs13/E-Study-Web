package com.work.e_study.service;

import com.work.e_study.dto.EmployeeCourseClassDTO;
import com.work.e_study.dto.EmployeeCourseDTO;
import com.work.e_study.exception.EmployeeNotFoundException;
import com.work.e_study.model.Employee;
import com.work.e_study.repository.ClassRepository;
import com.work.e_study.repository.CourseRepository;
import com.work.e_study.repository.EmployeeRepository;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class VenueInfoService {
    private EmployeeRepository employeeRepository;

    public List<EmployeeCourseClassDTO> getVenueInfo() {
        return employeeRepository.findVenueInfo();
    }

    @Transactional
    public void addVenueInfo() {

    }


}
