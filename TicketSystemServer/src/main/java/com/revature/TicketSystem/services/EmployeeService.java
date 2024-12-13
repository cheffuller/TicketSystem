package com.revature.TicketSystem.services;

import org.springframework.stereotype.Service;

import com.revature.TicketSystem.models.Employee;
import com.revature.TicketSystem.repositories.EmployeeRepository;

@Service
public class EmployeeService {

    private EmployeeRepository employeeRepository;

    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public void login(String username, String password) {
        employeeRepository.findByUsernameAndPassword(username, password);
    }

    public void register(Employee newEmployee) {
        employeeRepository.save(newEmployee);
    }
}
