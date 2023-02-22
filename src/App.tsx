import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import {
  getUserSession,
  User,
  UserContextProvider,
} from "./context/UserContext";
import { useEffect, useState } from "react";
import { Login } from "./pages/public/Login";
import Signup from "./pages/public/Signup";
import ProtectedRoute from "./components/RouteGuard/ProtectedRoute";
import { Help } from "./pages/private/Help";
import { Acceuil } from "./pages/private/Acceuil";
import { PublicRoute } from "./components/RouteGuard/PublicRoute";
import { Transfert } from "./pages/public/Transfert";
import { PageNotFound } from "./pages/404";
import { Box } from "@chakra-ui/react";
import { Contributeur } from "./pages/private/Contributeur";

function App() {
  const [user, setUser] = useState<User>(getUserSession);
  const handleLogin = (_user: User) => {
    setUser({ token: _user.token, isAuthenticated: _user.isAuthenticated });
  };

  return (
      <BrowserRouter>
        <UserContextProvider value={{ user, handleLogin }}>
          <Box display={"flex"} position="relative" flexDir="column" minH={"100vh"}>
          <Routes>
            {/** Route PRIVEE */}
            <Route element={<ProtectedRoute />}>
              <Route path="acceuil" element={<Acceuil title="acceuil" />} />
              <Route path="help" element={<Help />} />
              <Route
                path="transfert"
                element={<Transfert title="transfert" />}
              />

              <Route path="contributeur" element={<Contributeur title="contributeur" />} />
            </Route>
            {/** Route PUBLIC */}
            <Route element={<PublicRoute />}>
              <Route path="login" element={<Login title="login" />} />
              <Route element={<Signup title="signup" />} path="signup" />
            </Route>

            <Route path="/" element={<Navigate replace to="/acceuil" />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          </Box>
        </UserContextProvider>
      </BrowserRouter>
  );
}

export default App;
