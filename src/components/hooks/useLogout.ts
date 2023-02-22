import jwtInterceptor from "../../shared/jwtInterceptor";

import { socket } from "../../socket.io/WebSocketContexts";
export const logout = async () => {
    await jwtInterceptor.get("/auth/logout")
    localStorage.removeItem("user");
    socket.off("connect");
}