package com.revature.TicketSystem.services;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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

    // service to login employee
    @Transactional
    public Employee login(Employee employee) throws UnauthorizedException {
        Optional<Employee> optionalEmployee = employeeRepository.findByUsername(employee.getUsername());
        Employee foundEmployee = optionalEmployee.orElseThrow(() -> new UnauthorizedException("Account not found."));
        if (!foundEmployee.getPassword().equals(employee.getPassword())) {
            throw new UnauthorizedException("Password doesn't match.");
        }
        return foundEmployee;
    }

    // service to register employee
    @Transactional
    public Employee register(Employee employee) throws UserExistsException {
        employee.setRole("employee");

        Employee exampleEmployee = new Employee();
        exampleEmployee.setUsername(employee.getUsername());
        Example<Employee> example = Example.of(exampleEmployee);

        if (employeeRepository.exists(example))
            throw new UserExistsException("Username already exists in database.");
        return employeeRepository.save(employee);
    }

    // service to get a list of employees
    @Transactional
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    // service to find an employee by id
    @Transactional
    public Employee getEmployeeByID(Long id) throws UnauthorizedException {
        Optional<Employee> optionalEmployee = employeeRepository.findById(id);
        Employee employee = optionalEmployee.orElseThrow(() -> new UnauthorizedException("Account not found."));
        return employee;
    }

    // service to edit an employee
    @Transactional
    public Employee editEmployee(Long id, Employee updatedEmployee) throws UnauthorizedException {
        Optional<Employee> existingEmployee = employeeRepository.findById(id);
        Employee employee = existingEmployee.orElseThrow(() -> new UnauthorizedException("Account not found."));

        if (updatedEmployee.getFirstName() != null) {
            employee.setFirstName(updatedEmployee.getFirstName());
        }
        if (updatedEmployee.getLastName() != null) {
            employee.setLastName(updatedEmployee.getLastName());
        }
        if (updatedEmployee.getAddress() != null) {
            employee.setAddress(updatedEmployee.getAddress());
        }
        if (updatedEmployee.getCity() != null) {
            employee.setCity(updatedEmployee.getCity());
        }
        if (updatedEmployee.getZipCode() != 0) {
            employee.setZipCode(updatedEmployee.getZipCode());
        }
        return employeeRepository.save(employee);
    }
}
