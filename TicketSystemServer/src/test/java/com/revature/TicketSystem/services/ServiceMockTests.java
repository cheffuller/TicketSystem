package com.revature.TicketSystem.services;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.List;
import java.util.Optional;

import org.hamcrest.Matchers;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.context.SpringBootTest;

import com.revature.TicketSystem.models.Employee;
import com.revature.TicketSystem.models.Ticket;
import com.revature.TicketSystem.repositories.EmployeeRepository;
import com.revature.TicketSystem.repositories.TicketRepository;

@ExtendWith(MockitoExtension.class)
@SpringBootTest
public class ServiceMockTests {
    @InjectMocks
    private TicketService ticketService;

    @InjectMocks
    private EmployeeService employeeService;

    @Mock
    private TicketRepository ticketRepository;

    @Mock
    private EmployeeRepository employeeRepository;

    @Test
    public void postTicketTest() throws Exception {
        Ticket ticket = new Ticket();
        ticket.setTicketID((long) 1);
        ticket.setDescription("test ticket");

        when(ticketRepository.save(ticket)).thenReturn(ticket);

        Ticket savedTicket = ticketService.postTicket(ticket);

        assertEquals(ticket, savedTicket);
        verify(ticketRepository).save(ticket);
    }

    @Test
    public void putTicketStatusTest() throws Exception {
        // mocks ticket with "PENDING" status in DB
        Long ticketId = (long) 1;
        Ticket existingTicket = new Ticket();
        existingTicket.setTicketID(ticketId);
        existingTicket.setStatus("PENDING");

        // mocks ticket with "ACCEPTED" status sent from front end
        Ticket updatedTicket = new Ticket();
        updatedTicket.setStatus("ACCEPTED");

        when(ticketRepository.findById(ticketId)).thenReturn(Optional.of(existingTicket));
        when(ticketRepository.save(existingTicket)).thenReturn(existingTicket);

        Ticket result = ticketService.putTicketStatus(ticketId, updatedTicket);

        assertEquals("ACCEPTED", result.getStatus());
        verify(ticketRepository).findById(ticketId);
        verify(ticketRepository).save(existingTicket);
    }

    @Test
    public void getTicketsByEmployeeTest() throws Exception {
        Long ticketId = (long) 1;
        Ticket existingTicket = new Ticket();
        existingTicket.setTicketID(ticketId);
        existingTicket.setStatus("PENDING");

        when(ticketRepository.findByEmployeeID(ticketId)).thenReturn(List.of(existingTicket));

        List<Ticket> tickets = ticketService.getTicketsByEmployee((long) 1);
        assertThat(tickets, Matchers.hasItem(Matchers.instanceOf(Ticket.class)));
    }

    @Test
    public void editEmployeeTest() throws Exception {
        Long id = (long) 1;

        Employee existingEmployee = new Employee();
        existingEmployee.setId(id);
        existingEmployee.setUsername("tester");
        existingEmployee.setPassword("testpass");

        Employee updatedEmployee = new Employee();
        updatedEmployee.setFirstName("first");
        updatedEmployee.setLastName("last");
        updatedEmployee.setAddress("1234 Street");
        updatedEmployee.setCity("City");
        updatedEmployee.setZipCode(12345);

        when(employeeRepository.findById(id)).thenReturn(Optional.of(existingEmployee));
        when(employeeRepository.save(any(Employee.class))).thenAnswer(i -> i.getArgument(0));

        Employee result = employeeService.editEmployee((long) 1, updatedEmployee);

        assertEquals("first", result.getFirstName());
        assertEquals("last", result.getLastName());
        assertEquals("1234 Street", result.getAddress());
        assertEquals("City", result.getCity());
        assertEquals(12345, result.getZipCode());

        verify(employeeRepository, times(1)).findById(1L);
        verify(employeeRepository, times(1)).save(existingEmployee);
    }
}
