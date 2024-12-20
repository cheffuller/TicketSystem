package com.revature.TicketSystem.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.revature.TicketSystem.repositories.TicketRepository;
import com.revature.TicketSystem.exceptions.UnauthorizedException;
import com.revature.TicketSystem.models.Ticket;

@Service
public class TicketService {

    private TicketRepository ticketRepository;

    public TicketService(TicketRepository ticketRepository) {
        this.ticketRepository = ticketRepository;
    }

    // service to get a list of tickets
    public List<Ticket> getAllTickets() {
        return (List<Ticket>) ticketRepository.findAll();
    }

    // service to submit a ticket
    public Ticket postTicket(Ticket ticket) throws UnauthorizedException {
        return ticketRepository.save(ticket);
    }

    // service to get a list of tickets with "PENDING" status
    public List<Ticket> getPendingTickets() {
        List<Ticket> ticketList = ticketRepository.findByStatus("PENDING");
        return ticketList;
    }

    // service to get all of an employees tickets
    public List<Ticket> getTicketsByEmployee(Long employeeID) {
        List<Ticket> ticketList = ticketRepository.findByEmployeeID(employeeID);
        return ticketList;
    }

    // service to process ticket (change status from pending to accepted or denied)
    public Ticket putTicketStatus(Long ticketId, Ticket ticket) throws UnauthorizedException {
        Optional<Ticket> optionalTicket = ticketRepository.findById(ticketId);
        Ticket foundTicket = optionalTicket.orElseThrow(() -> new UnauthorizedException("Ticket not found."));
        // prevents tickets without "PENDING" status from being edited
        if (!foundTicket.getStatus().equals("PENDING")) throw new UnauthorizedException("Cannot edit this ticket.");
        foundTicket.setStatus(ticket.getStatus());
        return ticketRepository.save(foundTicket);
    }
}
