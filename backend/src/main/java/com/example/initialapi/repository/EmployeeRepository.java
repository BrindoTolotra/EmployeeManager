package com.example.initialapi.repository;


import com.example.initialapi.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

    public List<Employee> findBySex(String sex);
    public Employee findByRefIgnoreCase(String ref);
    public List<Employee> findByNameContainingIgnoreCaseOrderByRefAsc(String name);
    public void deleteByRef(String ref);
}
