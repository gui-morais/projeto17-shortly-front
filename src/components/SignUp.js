import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import URL_back from "../const/URL";

export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    function login(e) {
        e.preventDefault();

        const requisition = axios.post(URL_back + "/signup", {name, email, password, confirmPassword});

        requisition.then(() => {
            alert("Cadastro feito com sucesso!");
            navigate("/login");
        });

        requisition.catch((err) => {
            console.log(err.response);
            if(err.response.status === 409) {
                alert("Usuário já cadastrado!");
            } else {
                alert(err.response.data);
            }
        });
    }

    return(
        <Container>
            <form onSubmit={login}>
                <input type="text" placeholder="Nome" value={name} onChange={e => setName(e.target.value)} required/>
                <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required/>
                <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} required/>
                <input type="password" placeholder="Confirmar Senha" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required/>
                <button type="submit">Criar Conta</button>
            </form>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    padding: 0px 150px;
    margin-top: 130px;
    box-sizing: border-box;
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
    input {
        width: 100%;
        height: 60px;
        box-sizing: border-box;
        border: 1px solid rgba(120, 177, 89, 0.25);
        border-radius: 12px;
        box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
        font-size: 15px;
        padding: 0px 15px;
        font-family: 'Lexend Deca', sans-serif;
        margin-bottom: 25px;
    }
    input::placeholder {
        font-family: 'Lexend Deca', sans-serif;
    }
    button {
        width: 180px;
        height: 60px;
        margin-top: 35px;
        background-color: #5D9040;
        color: white;
        font-size: 15px;
        font-weight: bold;
        border-radius: 12px;
        border: none;
        cursor: pointer;
    }
`;