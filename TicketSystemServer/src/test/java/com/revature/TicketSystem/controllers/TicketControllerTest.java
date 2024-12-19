package com.revature.TicketSystem.controllers;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;

import com.revature.TicketSystem.services.TicketService;

@WebMvcTest(TicketController.class)
public class TicketControllerTest {
    
    @Autowired
    private MockMvc mockMvc;

    @MockitoBean
    private TicketService ticketService;

    @Test
    public void endpointPostTicketTest() throws Exception {
        String requestBody = "{\"description\": \"testDescription\", \"amount\": \"10.00\", \"type\": \"testtype\"}";

        mockMvc.perform(post("/ticket")
                .contentType(MediaType.APPLICATION_JSON)
                .content(requestBody))
                .andExpect(status().isCreated());
    }

    @Test
    public void endpointGetPendingTicketTest() throws Exception {
        mockMvc.perform(get("/ticket/pending")).andExpect(status().isOk());
    }

    @Test
    public void endpointPutTicketStatusTest() throws Exception {
        String requestBody = "{\"description\": \"testDescription\", \"amount\": \"10.00\", \"status\": \"ACCEPTED\"}";

        mockMvc.perform(put("/ticket/process/502")
                .contentType(MediaType.APPLICATION_JSON)
                .content(requestBody))
                .andExpect(status().isOk());
    }

    @Test
    public void endpointGetTicketsByEmployeeTest() throws Exception {
        mockMvc.perform(get("/ticket/employee/502")).andExpect(status().isOk());
    }
}
