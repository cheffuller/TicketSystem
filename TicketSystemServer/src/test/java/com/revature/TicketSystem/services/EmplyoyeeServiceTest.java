package com.revature.TicketSystem.services;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertThrows;

import static org.hamcrest.MatcherAssert.assertThat;

import java.util.List;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import org.hamcrest.Matchers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.ApplicationContext;

import com.revature.TicketSystem.TicketSystemApplication;
import com.revature.TicketSystem.exceptions.UnauthorizedException;
import com.revature.TicketSystem.exceptions.UserExistsException;
import com.revature.TicketSystem.models.Employee;

@SpringBootTest
class EmplyoyeeServiceTest{
    
    @Autowired
    private static ApplicationContext app;

    @Autowired
    private EmployeeService employeeService;

    @BeforeAll
    public static void setUp() throws InterruptedException {
        String[] args = new String[] {};
        app = SpringApplication.run(TicketSystemApplication.class, args);
    }

    @AfterAll
    public static void tearDown() throws InterruptedException {
        SpringApplication.exit(app);
    }

    @Test
    void loginSuccessful() throws UnauthorizedException {
        Employee testEmployee = new Employee();
        testEmployee.setUsername("tester");
        testEmployee.setPassword("testpass");
        Employee employee = employeeService.login(testEmployee);
        assertEquals(testEmployee.getUsername(), employee.getUsername());
    }

    @Test
    void registerUserAlreadyExists() throws UserExistsException {
        Employee testEmployee = new Employee();
        testEmployee.setUsername("tester");
        testEmployee.setPassword("testpass");
        UserExistsException exception = assertThrows(UserExistsException.class, () -> employeeService.register(testEmployee));
        assertEquals("Username already exists in database.", exception.getMessage());
    }

    @Test
    void getAllEmployeesTest() throws Exception {
        List<Employee> employees = employeeService.getAllEmployees();
        assertFalse(employees.isEmpty());
        assertThat(employees, Matchers.hasItem(Matchers.instanceOf(Employee.class)));
    }
}
