package com.revature.TicketSystem.models;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class TicketModelTest {

    @Test
    public void testTicketModel() {
        Ticket ticket = new Ticket();

        ticket.setTicketID((long) 1);
        assertEquals((long) 1, ticket.getTicketID());

        ticket.setAmount(1.00);
        assertEquals(1.00, ticket.getAmount());

        ticket.setDescription("description");
        assertEquals("description", ticket.getDescription());

        ticket.setEmployeeID((long) 1);
        assertEquals((long) 1, ticket.getEmployeeID());

        ticket.setStatus("PENDING");
        assertEquals("PENDING", ticket.getStatus());

        ticket.setType("type");
        assertEquals("type", ticket.getType());
    }
}
