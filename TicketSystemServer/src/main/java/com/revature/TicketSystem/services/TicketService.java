package com.revature.TicketSystem.services;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;

import com.revature.TicketSystem.repositories.EmployeeRepository;
import com.revature.TicketSystem.repositories.TicketRepository;
import com.revature.TicketSystem.exceptions.UnauthorizedException;
import com.revature.TicketSystem.models.Employee;
import com.revature.TicketSystem.models.Ticket;

@Service
public class TicketService {

    private TicketRepository ticketRepository;
    private EmployeeRepository employeeRepository;

    public TicketService(TicketRepository ticketRepository, EmployeeRepository employeeRepository) {
        this.ticketRepository = ticketRepository;
        this.employeeRepository = employeeRepository;
    }

    public List<Ticket> getAllTickets() {
        return (List<Ticket>) ticketRepository.findAll();
    }

    public Ticket submitTicket(Ticket ticket) throws UnauthorizedException {
        // Optional<Employee> optionalEmployee = employeeRepository.findByUsername(username);
        // Employee foundEmployee = optionalEmployee.orElseThrow(() -> new UnauthorizedException("Account not found."));
        // ticket.setEmployee(foundEmployee);
        return ticketRepository.save(ticket);
    }

    public List<Ticket> getPendingTickets() {
        List<Ticket> ticketList = ticketRepository.findByStatus("pending");
        return ticketList;
    }

}
