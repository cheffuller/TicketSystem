package com.revature.TicketSystem.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.TicketSystem.models.Employee;
import com.revature.TicketSystem.services.EmployeeService;

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

    @PostMapping("login")
    public ResponseEntity<Void> login(@RequestBody Employee employee) {
        employeeService.login(employee.getUsername(), employee.getPassword());
        return ResponseEntity.noContent().header("username", employee.getUsername()).build();
    }
    
}
