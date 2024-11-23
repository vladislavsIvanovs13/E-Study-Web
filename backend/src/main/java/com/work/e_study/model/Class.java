package com.work.e_study.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "classes")
public class Class {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private String topic;

    @Column
    private String time;

    @Column
    private String venue;

    @Column
    private Date deadline;

    @Column(name = "work_description")
    private String workDescription;

    @ManyToMany(mappedBy = "classes")
    private List<Student> students;

    @ManyToOne
    @JoinColumn(name = "course_id")
    private Course course;
}
