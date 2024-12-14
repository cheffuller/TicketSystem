package com.revature.TicketSystem.controllers;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.revature.TicketSystem.exceptions.UnauthorizedException;
import com.revature.TicketSystem.models.Employee;
import com.revature.TicketSystem.models.Ticket;
import com.revature.TicketSystem.services.TicketService;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestParam;



@Controller
@RequestMapping("ticket")
public class TicketController {

    private TicketService ticketService;

    public TicketController(TicketService ticketService) {
        this.ticketService = ticketService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public @ResponseBody List<Ticket> getTicketList() {
        return ticketService.getTicketList();
    }

    @RequestMapping(method=RequestMethod.POST)
    public ResponseEntity<Ticket> submitTicket(@RequestBody Ticket ticket) throws UnauthorizedException {
        Ticket newTicket = ticketService.submitTicket(ticket);
        return ResponseEntity.status(HttpStatus.OK).body(newTicket);
    }
}
