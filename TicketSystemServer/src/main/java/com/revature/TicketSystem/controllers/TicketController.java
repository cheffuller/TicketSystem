package com.revature.TicketSystem.controllers;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.revature.TicketSystem.exceptions.UnauthorizedException;
import com.revature.TicketSystem.models.Ticket;
import com.revature.TicketSystem.services.TicketService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("ticket")
public class TicketController {

    private TicketService ticketService;

    public TicketController(TicketService ticketService) {
        this.ticketService = ticketService;
    }

    @GetMapping
    public @ResponseBody List<Ticket> getAllTickets() {
        return ticketService.getAllTickets();
    }

    @PostMapping
    public ResponseEntity<Ticket> postTicket(@RequestBody Ticket ticket) throws UnauthorizedException {
        Ticket newTicket = ticketService.postTicket(ticket);
        return ResponseEntity.status(HttpStatus.OK).body(newTicket);
    }

    @GetMapping("pending")
    public ResponseEntity<List<Ticket>> getPendingTickets() {
        List<Ticket> pendingTickets = ticketService.getPendingTickets();
        return ResponseEntity.status(HttpStatus.OK).body(pendingTickets);
    }

    @PutMapping("process/{ticketId}")
    public ResponseEntity<Ticket> putTicketStatus(@PathVariable Long ticketId, @RequestBody Ticket ticket) throws UnauthorizedException{
        Ticket processedTicket = ticketService.putTicketStatus(ticketId, ticket);
        return ResponseEntity.status(HttpStatus.OK).body(processedTicket);
    }
    
    @GetMapping("employee/{employeeID}")
    public ResponseEntity<List<Ticket>> getTicketsByEmployee(@PathVariable Long employeeID) {
        List<Ticket> employeeTickets = ticketService.getTicketsByEmployee(employeeID);
        return ResponseEntity.status(HttpStatus.OK).body(employeeTickets);
    }
    
}
