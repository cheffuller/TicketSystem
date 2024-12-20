package com.revature.TicketSystem.services;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.hamcrest.MatcherAssert.assertThat;

import java.util.List;

import org.hamcrest.Matchers;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.ApplicationContext;

import com.revature.TicketSystem.TicketSystemApplication;
import com.revature.TicketSystem.models.Ticket;

@SpringBootTest
public class TicketServiceTest {
    
    @Autowired
    private static ApplicationContext app;

    @Autowired
    private TicketService ticketService;

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
    public void getAllTicketsTest() throws Exception {
        List<Ticket> tickets = ticketService.getAllTickets();
        assertFalse(tickets.isEmpty());
        assertThat(tickets, Matchers.hasItem(Matchers.instanceOf(Ticket.class)));
    }

    @Test
    public void getPendingTicketsTest() throws Exception {
        List<Ticket> tickets = ticketService.getPendingTickets();
        assertThat(tickets, Matchers.hasItem(Matchers.instanceOf(Ticket.class)));
    }
}
