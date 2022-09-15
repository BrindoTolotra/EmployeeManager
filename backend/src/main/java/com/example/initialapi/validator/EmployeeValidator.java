package com.example.initialapi.validator;

import com.example.initialapi.model.Employee;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
@AllArgsConstructor
public class EmployeeValidator {

    public Employee validate(Employee oldEmployee, Employee employee) {
        if (employee.getName() != null) {
            oldEmployee.setName(employee.getName());
        }
        if (employee.getBirthDate() != null) {
            oldEmployee.setBirthDate(employee.getBirthDate());
        }
        if (employee.getSex() != null) {
            oldEmployee.setSex(employee.getSex());
        }
        if (employee.getEmail() != null) {
            oldEmployee.setEmail(employee.getEmail());
        }
        return oldEmployee;
    }


}
