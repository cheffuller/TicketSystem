package com.revature.TicketSystem.models;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table
public class Ticket implements Serializable{

    @Id
    @GeneratedValue
    @Column(name = "ticket_id")
    private Long ticketID;
    private double amount;
    private String description;
    private String status;

    @ManyToOne
    @JoinColumn(name = "employee_id")
    private Employee employee;

    public Ticket() {
    }

    public Ticket(Long ticketID, double amount, String description, String status, Employee employee) {
        this.ticketID = ticketID;
        this.amount = amount;
        this.description = description;
        this.status = status;
        this.employee = employee;
    }

    public Long getTicketID() {
        return ticketID;
    }

    public void setTicketID(Long ticketID) {
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

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    
}
