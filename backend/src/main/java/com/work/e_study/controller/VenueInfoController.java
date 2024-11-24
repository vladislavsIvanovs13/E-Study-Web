package com.work.e_study.controller;

import com.work.e_study.dto.EmployeeCourseClassDTO;
import com.work.e_study.service.VenueInfoService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@AllArgsConstructor
@RequestMapping("/diary")
@RestController
public class VenueInfoController {
    private VenueInfoService venueInfoService;

    @GetMapping
    public List<EmployeeCourseClassDTO> getVenueInfo() {
        return venueInfoService.getVenueInfo();
    }
}
