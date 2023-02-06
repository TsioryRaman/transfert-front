import { createContext } from "react";
import { io, Socket } from "socket.io-client";

export const socket = io(import.meta.env.VITE_WEBSOCKET_ENDPOINT);
export const WebSocketContext = createContext<Socket>(socket);

export const WebSocketProvider = WebSocketContext.Provider;