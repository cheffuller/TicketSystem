package com.revature.TicketSystem.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.TicketSystem.models.Ticket;

@Repository
public interface TicketRepository extends JpaRepository<Ticket, Integer>{

}
