package com.revature.TicketSystem.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.TicketSystem.models.Employee;

import java.util.Optional;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, String>{
    
    Optional<Employee> findByUsernameAndPassword(String username, String password);
}