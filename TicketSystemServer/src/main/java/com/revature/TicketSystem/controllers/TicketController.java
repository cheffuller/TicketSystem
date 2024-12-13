package com.revature.TicketSystem.controllers;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.revature.TicketSystem.models.Ticket;
import com.revature.TicketSystem.services.TicketService;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;


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
    
}
