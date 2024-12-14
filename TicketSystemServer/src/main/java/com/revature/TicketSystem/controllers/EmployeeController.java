package com.revature.TicketSystem.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.TicketSystem.exceptions.UnauthorizedException;
import com.revature.TicketSystem.exceptions.UserExistsException;
import com.revature.TicketSystem.models.Employee;
import com.revature.TicketSystem.services.EmployeeService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("employee")
public class EmployeeController {

    private EmployeeService employeeService;

    public EmployeeController (EmployeeService employeeService){
        this.employeeService = employeeService;
    }

    @PostMapping("register")
    public ResponseEntity<Employee> register(@RequestBody Employee employee) throws UserExistsException{
        Employee newEmployee = employeeService.register(employee);
        return ResponseEntity.status(HttpStatus.CREATED).body(newEmployee);
    }

    @PostMapping("login")
    public ResponseEntity<Employee> login(@RequestBody Employee employee) throws UnauthorizedException{
        employeeService.login(employee.getUsername(), employee.getPassword());
        return ResponseEntity.noContent().header("username", employee.getUsername()).build();
    }
    
}
