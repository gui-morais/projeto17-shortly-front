import { useContext } from "react";
import styled from "styled-components";
import UserContext from "./UserContext";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

export default function Menu () {
    const [userLog] = useContext(UserContext);

    let menu;
    if(userLog.token === undefined) {
        menu = (
            <Container login={false}>
                <Texts>
                    <NewLink to="/login"><Green>Entrar</Green></NewLink>
                    <NewLink to="/cadastro"><Grey>Cadastrar-se</Grey></NewLink>
                </Texts>
            </Container>
        );
    } else {
        menu = (
            <Container login={true}>
                <Texts>
                    <Green>Seja bem-vindo(a), {userLog.name}!</Green>
                </Texts>
                <Texts>
                    <NewLink to="/me"><Grey>Home</Grey></NewLink>
                    <NewLink to="/"><Grey>Ranking</Grey></NewLink>
                    <Grey>Sair</Grey>
                </Texts>
            </Container>
        );
    }

    return (
        <>
            {menu}
            <Logo>
                <h1>Shortly</h1>
                <img src={logo} alt="Não foi possível carregar a imagem" />
            </Logo>
        </>
    );
}

const Container = styled.div`
    width: 100%;
    margin-top: 60px;
    margin-bottom: 10px;
    display: flex;
    justify-content: ${props => {if(props.login){return "space-between"} else {return "end"}}};
`;

const Texts = styled.div`
    display: flex;
`;

const Green = styled.p`
    font-size: 15px;
    color: #5D9040;
    cursor: pointer;
`;

const Grey = styled.p`
    font-size: 15px;
    color: #9C9C9C;
    margin-left: 15px;
    cursor: pointer;
`;

const Logo = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    h1 {
        font-size: 65px;
        color: black;
        font-weight: 200;
        margin-bottom: 20px;
    }
    img {
        width: 100px;
    }
`

const NewLink = styled(Link)`
  text-decoration: none;
`;