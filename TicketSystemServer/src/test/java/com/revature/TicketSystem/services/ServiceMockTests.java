package com.revature.TicketSystem.services;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.context.SpringBootTest;

import com.revature.TicketSystem.models.Ticket;
import com.revature.TicketSystem.repositories.TicketRepository;

@ExtendWith(MockitoExtension.class)
@SpringBootTest
public class ServiceMockTests {
    @InjectMocks
    private TicketService ticketService;

    @Mock
    private TicketRepository ticketRepository;

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

        //mocks ticket with "ACCEPTED" status sent from front end
        Ticket updatedTicket = new Ticket();
        updatedTicket.setStatus("ACCEPTED");

        when(ticketRepository.findById(ticketId)).thenReturn(Optional.of(existingTicket));
        when(ticketRepository.save(existingTicket)).thenReturn(existingTicket);

        Ticket result = ticketService.putTicketStatus(ticketId, updatedTicket);

        assertEquals("ACCEPTED", result.getStatus());
        verify(ticketRepository).findById(ticketId);
        verify(ticketRepository).save(existingTicket);
    }
}
