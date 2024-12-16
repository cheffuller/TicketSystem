import React, { ReactNode, useState } from "react";

export enum Status {
    Pending = "PENDING",
    Accepted = "ACCEPTED",
    Denied = "DENIED"
}

export interface Ticket {
    ticketID: number;
    amount: number;
    description: string;
    status: Status;
    type: string;
    employeeID: number;
}

interface TicketContextType {
    ticket: Ticket | null;
    setTicket: React.Dispatch<React.SetStateAction<Ticket | null>>;
}

interface TicketProviderProps {
    children: ReactNode;
}

const TicketContext = React.createContext<TicketContextType>({
    ticket: null,
    setTicket: () => {}
})

export const TicketProvider: React.FC<TicketProviderProps> = ({ children }) => {
    const [ticket, setTicket] = useState<Ticket | null>(null)

    return (
        <TicketContext.Provider value={{ ticket, setTicket }}>
            {children}
        </TicketContext.Provider>
    )
}