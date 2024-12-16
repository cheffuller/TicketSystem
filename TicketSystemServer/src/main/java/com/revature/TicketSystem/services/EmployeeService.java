package com.revature.TicketSystem.services;

import java.util.Optional;

import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;

import com.revature.TicketSystem.exceptions.UnauthorizedException;
import com.revature.TicketSystem.exceptions.UserExistsException;
import com.revature.TicketSystem.models.Employee;
import com.revature.TicketSystem.repositories.EmployeeRepository;

@Service
public class EmployeeService {

    private EmployeeRepository employeeRepository;

    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public Employee login(Employee employee) throws UnauthorizedException{
        Employee exampleEmployee = new Employee();
        exampleEmployee.setUsername(employee.getUsername());
        exampleEmployee.setPassword(employee.getPassword());
        Example<Employee> example = Example.of(exampleEmployee);

        Optional<Employee> optionalEmployee = employeeRepository.findOne(example);
        Employee foundEmployee = optionalEmployee.orElseThrow(() -> new UnauthorizedException("Account not found."));
        return foundEmployee;
    }

    public Employee register(Employee employee) throws UserExistsException {
        Employee exampleEmployee = new Employee();
        exampleEmployee.setUsername(employee.getUsername());
        Example<Employee> example = Example.of(exampleEmployee);

        if (employeeRepository.exists(example)) throw new UserExistsException("Username already exists in database.");

        return employeeRepository.save(employee);
    }

    // public Employee getEmployeeByUsername(Employee employee) {
    //     Employee exampleEmployee = new Employee();
    //     exampleEmployee.setUsername(employee.getUsername());
    //     Example<Employee> example = Example.of(exampleEmployee);
    //     Optional<Employee> optionalEmployee = employeeRepository.findByUsername(example.username)
    // }
}
