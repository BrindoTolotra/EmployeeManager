package com.example.initialapi.controller;

import com.example.initialapi.model.DataFormat;
import com.example.initialapi.model.Employee;
import com.example.initialapi.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@RequestMapping(value = "/employee")
@CrossOrigin(origins = "*")
public class EmployeeController {
    private EmployeeService employeeService;

    @GetMapping(value = "")
    public DataFormat<Employee> getAllEmployee(
            @RequestParam(name = "page", required = false) Integer page,
            @RequestParam(name = "size", required = false) Integer size
    ) {
        return employeeService.getAll(page, size);
    }

    @PostMapping(value = "")
    public Employee saveEmployee(@RequestBody Employee employee) {
        return employeeService.save(employee);
    }

    @GetMapping(value = "/{id}")
    public Employee getEmployeeById(@PathVariable int id) {
        return employeeService.getById(id);
    }

    @GetMapping(value = "/filter/{sex}")
    public DataFormat<Employee> getEmployeeBySex(
            @RequestParam(name = "page", required = false) Integer page,
            @RequestParam(name = "size", required = false) Integer size,
            @PathVariable String sex ) {
        return employeeService.getBySex(page, size,sex);
    }

    @GetMapping(value = "/ref/{ref}")
    public Employee findEmployeeByRef(@PathVariable String ref) {
        return employeeService.getByRef(ref);
    }

    @GetMapping(value = "/name/{name}")
    public DataFormat<Employee> getEmployeeByName(
            @RequestParam(name = "page", required = false) Integer page,
            @RequestParam(name = "size", required = false) Integer size,
            @PathVariable String name ){
        return employeeService.getByName(page,size,name);
    }



    @PutMapping(value = "/{id}")
    public Employee putEmployeeById(@PathVariable int id, @RequestBody Employee employee) {
        return employeeService.putById(id, employee);
    }

    @DeleteMapping(value = "/delete/{id}")
    public String deleteEmployeeById(@PathVariable int id){
        employeeService.deleteById(id);
        return "employee of id "+id+" is deleted";
    }

    @DeleteMapping(value = "/delete/ref")
    public String deleteEmployeeByRef(@PathVariable String ref){
        employeeService.deleteByRef(ref);
        return "employee of ref "+ref+" is deleted";
    }
}
