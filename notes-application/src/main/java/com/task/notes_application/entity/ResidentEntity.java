package com.task.notes_application.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "residents")
@Data
public class ResidentEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String state;

    @Column(nullable = false)
    private String gender;

    @Column(name = "flat_number", nullable = false)
    private String flatNumber;

    @Column(name = "rent_status", nullable = false)
    private String rentStatus;
}

