package com.example.initialapi.model;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "employee")
public class Employee implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(nullable = false,unique = true,length = 9)
    private String ref;
    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private String birthDate;
    @Column(nullable = false)
    private String sex;
    @Column(nullable = false)
    private String email;
    @Column(nullable = false)
    private String function;
    @Column(nullable = false)
    private String domain;
}
