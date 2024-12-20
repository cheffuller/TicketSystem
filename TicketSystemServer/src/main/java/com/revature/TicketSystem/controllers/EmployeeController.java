package com.revature.TicketSystem.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.TicketSystem.exceptions.UnauthorizedException;
import com.revature.TicketSystem.exceptions.UserExistsException;
import com.revature.TicketSystem.models.Employee;
import com.revature.TicketSystem.services.EmployeeService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/employee")
public class EmployeeController {

    private EmployeeService employeeService;

    public EmployeeController (EmployeeService employeeService){
        this.employeeService = employeeService;
    }

    // endpoint to register employee
    @PostMapping("register")
    public ResponseEntity<Employee> register(@RequestBody Employee employee) throws UserExistsException{
        Employee newEmployee = employeeService.register(employee);
        return ResponseEntity.status(HttpStatus.CREATED).body(newEmployee);
    }

    // endpoint to login
    @PostMapping("login")
    public ResponseEntity<Employee> login(@RequestBody Employee employee) throws UnauthorizedException{
        Employee registeredEmployee = employeeService.login(employee);
        return ResponseEntity.status(HttpStatus.OK).body(registeredEmployee);
    }

    // endpoint to get one employee by id
    @GetMapping("{id}")
    public ResponseEntity<Employee> getEmployeeByID(@PathVariable Long id) throws UnauthorizedException {
        Employee employee = employeeService.getEmployeeByID(id);
        return ResponseEntity.status(HttpStatus.OK).body(employee);
    }
    
    // endpoint to edit an employee
    @PutMapping("{id}")
    public ResponseEntity<Employee> editEmployee(@PathVariable Long id, @RequestBody Employee employee) throws UnauthorizedException {
        Employee editedEmployee = employeeService.editEmployee(id, employee);
        return ResponseEntity.status(HttpStatus.OK).body(editedEmployee);
    }
}
