import { useContext, useEffect, useState } from "react";
import UserContext from "./UserContext";
import trophy from "../images/trophy.png";
import styled from "styled-components";
import URL_back from "../const/URL";
import axios from "axios";

export default function Ranking() {
    const [userLog] = useContext(UserContext);
    const [user, setUser] = useState([]);

    function getRanking() {
        const requisition = axios.get(URL_back + "/ranking");

        requisition.then(res => {
            setUser(res.data);
        })

        requisition.catch(err => alert(err.response.data));
    }

    useEffect(getRanking, []);



    const positions = [];
    user.map((e,i) => positions.push(
        <p key={i}>{i+1}. {e.name} - {e.linksCount} {e.linksCount === "1" ? "link" : "links"} - {e.visitCount} {e.visitCount === "1" ? "visualização" : "visualizações"}</p>
    ));

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

