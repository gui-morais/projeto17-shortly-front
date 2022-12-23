import { useContext } from "react";
import UserContext from "./UserContext";
import trophy from "../images/trophy.png";
import styled from "styled-components";

export default function Ranking() {
    const [userLog] = useContext(UserContext);
    const positions = [];
    positions.push(<p>1. Fulaninha - 32 links - 1.703.584 visualizações</p>);
    positions.push(<p>2. Ciclano - 20 links - 1.113.347 visualizações</p>);
    positions.push(<p>3. Beltrana - 18 links - 852.961 visualizações</p>);
    positions.push(<p>4. Joaozin - 14 links - 492.173 visualizações</p>);
    positions.push(<p>5. DEFINITIVAMENTE_NAO_E_UM_BOT - 12345252 links - 37.707 visualizações</p>);

    return(
        <Container>
            <Top>
                <img src={trophy} alt="Não foi possível carregr a imagem" />
                <h1>Ranking</h1>
            </Top>
            <Box>
                {positions}
            </Box>
            {(userLog.token === undefined) ? <h1>Crie sua conta para usar nosso serviço!</h1> : ""}
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        font-size: 45px;
        font-weight: bold;
    }
`;

const Top = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 50px;
        margin-right: 10px;
    }
    margin-bottom: 60px;
`;

const Box = styled.div`
    width: calc(100% - 300px);
    border: 1px solid rgba(120, 177, 89, 0.25);
    border-radius: 25px;
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    padding: 20px 40px;
    p {
        font-size: 20px;
        margin-bottom: 15px;
    }
    margin-bottom: 80px;
`;

