package com.revature.TicketSystem.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class Ticket {

    @Id
    @Column(name = "ticket_id")
    private int ticketID;
    private double amount;
    private String description;
    private String status;

    public Ticket() {
    }

    public Ticket(int ticketID, double amount, String description, String status) {
        this.ticketID = ticketID;
        this.amount = amount;
        this.description = description;
        this.status = status;
    }

    public int getTicketID() {
        return ticketID;
    }

    public void setTicketID(int ticketID) {
        this.ticketID = ticketID;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    
}
