package com.revature.TicketSystem.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.TicketSystem.models.Ticket;
import java.util.List;


@Repository
public interface TicketRepository extends JpaRepository<Ticket, Long>{
    
    List<Ticket> findByStatus(String status);

    List<Ticket> findByEmployeeID(Long employeeID);
}
