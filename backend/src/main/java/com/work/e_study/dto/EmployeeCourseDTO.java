package com.work.e_study.dto;

import lombok.*;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EmployeeCourseDTO {
    private int id;
    private String employee;
    private String structuralUnit;
    private String room;
    private String email;
    private String title;
}
