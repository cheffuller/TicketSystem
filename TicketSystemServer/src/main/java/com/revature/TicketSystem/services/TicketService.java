package com.revature.TicketSystem.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.revature.TicketSystem.repositories.TicketRepository;
import com.revature.TicketSystem.models.Ticket;

@Service
public class TicketService {

    private TicketRepository ticketRepository;

    public TicketService(TicketRepository ticketRepository) {
        this.ticketRepository = ticketRepository;
    }

    public List<Ticket> getTicketList() {
        return (List<Ticket>) ticketRepository.findAll();
    }

}
