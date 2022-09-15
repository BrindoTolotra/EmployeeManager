package com.example.initialapi.service;

import com.example.initialapi.model.*;
import com.example.initialapi.repository.EmployeeRepository;
import com.example.initialapi.validator.EmployeeValidator;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class EmployeeService {
    private EmployeeRepository employeeRepository;
    private EmployeeValidator employeeValidator;

    public DataFormat<Employee> getAll(Integer page, Integer size) {
        DataFormat<Employee> dataFormat = new DataFormat<>();
        if (page != null && size != null) {
            dataFormat.format(page, size, employeeRepository.findAll().size());
            dataFormat.setData(
                    (List<Employee>) employeeRepository.findAll(PageRequest.of(page, size))
            );
            return dataFormat;
        }
        dataFormat.setData(employeeRepository.findAll());
        return dataFormat;
    }





    public Employee save(Employee employee) {
        return employeeRepository.save(employee);
    }

    public Employee getById(int id) {

        return employeeRepository.findById(id).get();
    }

    public Employee putById(int id, Employee employee) {
        Employee oldEmployee = employeeRepository.findById(id).get();
        Employee newEmployee = employeeValidator.validate(oldEmployee, employee);
        return employeeRepository.save(newEmployee);
    }

    public DataFormat<Employee> getBySex(Integer page, Integer size, String sex){
        DataFormat<Employee> dataFormat = new DataFormat<>();
        if (page != null && size != null) {
            dataFormat.format(page, size, employeeRepository.findAll().size());
            dataFormat.setData(
                    (List<Employee>) employeeRepository.findAll(PageRequest.of(page, size))
            );
            return dataFormat;
        }
        dataFormat.setData(employeeRepository.findBySex(sex));
        return dataFormat;
    }

    public Employee getByRef(String ref) {
        return employeeRepository.findByRefIgnoreCase(ref);
    }

    public DataFormat<Employee> getByName(Integer page, Integer size, String name){
        DataFormat<Employee> dataFormat = new DataFormat<>();
        if (page != null && size != null) {
            dataFormat.format(page, size, employeeRepository.findAll().size());
            dataFormat.setData(
                    (List<Employee>) employeeRepository.findAll(PageRequest.of(page, size))
            );
            return dataFormat;
        }
        dataFormat.setData(employeeRepository.findByNameContainingIgnoreCaseOrderByRefAsc(name));
        return dataFormat;
    }

    public void deleteById(int id){
        employeeRepository.deleteById(id);
    }

    public void deleteByRef(String ref){
        employeeRepository.deleteByRef(ref);
    }
}
