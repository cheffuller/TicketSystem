package com.revature.TicketSystem.models;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class EmployeeModelTest {
    
    @Test
    public void testEmployeeModel() {
        Employee employee = new Employee();

        employee.setId((long) 1);
        assertEquals((long) 1, employee.getId());

        employee.setAddress("testAddress");
        assertEquals("testAddress", employee.getAddress());

        employee.setCity("testCity");
        assertEquals("testCity", employee.getCity());

        employee.setFirstName("test");
        assertEquals("test", employee.getFirstName());

        employee.setLastName("null");
        assertEquals("null", employee.getLastName());

        employee.setPassword("testpass");
        assertEquals("testpass", employee.getPassword());

        employee.setUsername("tester");
        assertEquals("tester", employee.getUsername());

        employee.setRole("employee");
        assertEquals("employee", employee.getRole());

        employee.setZipCode(12345);
        assertEquals(12345, employee.getZipCode());
    }
}
