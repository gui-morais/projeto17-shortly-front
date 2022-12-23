import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./UserContext";
import GlobalStyle from "./GlobalStyle";
import Menu from "./Menu";
import Ranking from "./Ranking";
import Home from "./Home";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

export default function App() {
    const [userLog, setUserLog] = useState({});
    return(
        <UserContext.Provider value={[userLog, setUserLog]} >
            <BrowserRouter>
                <GlobalStyle />
                <Menu />
                <Routes>
                    <Route path="/" element={<Ranking />} />
                    <Route path="/me" element={<Home />} />
                    <Route path="/cadastro" element={<SignUp />} />
                    <Route path="/login" element={<SignIn />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}