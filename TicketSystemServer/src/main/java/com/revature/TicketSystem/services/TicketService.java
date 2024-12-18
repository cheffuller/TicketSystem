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

    public List<Ticket> getAllTickets() {
        return (List<Ticket>) ticketRepository.findAll();
    }

    public Ticket postTicket(Ticket ticket) throws UnauthorizedException {
        return ticketRepository.save(ticket);
    }

    public List<Ticket> getPendingTickets() {
        List<Ticket> ticketList = ticketRepository.findByStatus("PENDING");
        return ticketList;
    }

    public List<Ticket> getTicketsByEmployee(Long empployeeID) {
        List<Ticket> ticketList = ticketRepository.findByEmployeeID(empployeeID);
        return ticketList;
    }

    public Ticket putTicketStatus(Long ticketId, Ticket ticket) throws UnauthorizedException {
        Optional<Ticket> optionalTicket = ticketRepository.findById(ticketId);
        Ticket foundTicket = optionalTicket.orElseThrow(() -> new UnauthorizedException("Ticket not found."));
        if (!foundTicket.getStatus().equals("PENDING")) throw new UnauthorizedException("Cannot edit this ticket.");
        foundTicket.setStatus(ticket.getStatus());
        return ticketRepository.save(foundTicket);
    }
}
