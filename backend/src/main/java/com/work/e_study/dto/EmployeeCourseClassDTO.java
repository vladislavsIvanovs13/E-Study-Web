package com.work.e_study.dto;

import lombok.*;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EmployeeCourseClassDTO {
    private int id;
    private String time;
    private String title;
    private String employee;
    private String venue;
}
