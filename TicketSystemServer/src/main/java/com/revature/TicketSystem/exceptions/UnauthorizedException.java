package com.revature.TicketSystem.exceptions;

import org.apache.tomcat.websocket.AuthenticationException;

public class UnauthorizedException extends AuthenticationException{
    public UnauthorizedException(String message){
        super(message);
    }
}