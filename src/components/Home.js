import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import URL_back from "../const/URL";
import UserContext from "./UserContext";

export default function Home() {
    const [userLog, setUserLog] = useContext(UserContext);
    const [URL, setURL] = useState([]);
    const [URLshort, setURLshort] = useState("");

    function getInfos() {
        const requisition = axios.get(URL_back + "/users/me", { headers: {Authorization: 'Bearer ' + userLog.token}});
        
        requisition.then((res) => {
            setUserLog({...userLog, name: res.data.name});
            setURL(res.data.shortenedUrls);
        });

        requisition.catch((err) => {
            if(err.response.status === 401) {
                alert("Token inválido!");
            } else if(err.response.status === 404){
                alert("Usuário não encontrado!");
            } else {
                alert(err.response.data);
            }
        });
    };

    useEffect(getInfos, []);

    function deleteURL(id) {
        const requisition = axios.delete(URL_back + "/urls/" + id, { headers: {Authorization: 'Bearer ' + userLog.token}});

        requisition.then(() => getInfos());

        requisition.catch(err => {
            if(err.response.status === 401) {
                alert("Não autorizado!");
            } else if(err.response.status === 404) {
                alert("URL não encontrada!");
            } else {
                alert(err.response.data);
            }
        })
    }

    function goToURL(shortURL) {
        const requisition = axios.get(URL_back + "/urls/open/" + shortURL);

        requisition.catch(err => {
            if(err.response.status === 404) {
                alert("URL não encontrada!");
            } else {
                alert(err.response.data);
            }
        });
    }

    const links = [];
    URL.map(e => links.push(
        <URLdiv key={e.id}>
            <Infos onClick={() => goToURL(e.shortURL)}>
                <p>{e.url}</p>
                <p>{e.shortUrl}</p>
                <p>Quantidade de visitantes: {e.visitCount}</p>
            </Infos>
            <Trash onClick={() => {
                if(window.confirm("Deseja mesmo excluir esse link?")) {
                    deleteURL(e.id);
                }
            }}><ion-icon name="trash"></ion-icon></Trash>
        </URLdiv>
    ));

    if(URL.length === 0) {
        links.push(<p>Nenhuma URL encurtada!</p>);
    }

    function newURL(e) {
        e.preventDefault();

        const requisition = axios.post(URL_back + "/urls/shorten", {url: URLshort}, {headers: {Authorization: "Bearer " + userLog.token}});

        requisition.then(() => {getInfos(); setURLshort("");});

        requisition.catch(err => {
            if(err.response.status === 401) {
                alert("Token inválido!");
            } else {
                alert(err.response.data);
            }
        })
    }

    return(
        <Container>
            <form onSubmit={newURL}>
                <input type="text" placeholder="Links que cabem no bolso" value={URLshort} onChange={(e) => setURLshort(e.target.value)} required/>
                <button type="submit">Encurtar link</button>
            </form>
            {links}
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    form {
        display: flex;
        justify-content: space-between;
        margin-top: 135px;
        margin-bottom: 40px;
    }
    input {
        width: 78%;
        height: 60px;
        border: 1px solid rgba(120, 177, 89, 0.25);
        border-radius: 12px;
        box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
        font-size: 15px;
        padding: 0px 15px;
        font-family: 'Lexend Deca', sans-serif;
    }
    input::placeholder {
        font-family: 'Lexend Deca', sans-serif;
    }
    button {
        width: 15%;
        background-color: #5D9040;
        color: white;
        font-size: 15px;
        font-weight: bold;
        border-radius: 12px;
        border: none;
        cursor: pointer;
    }
`;

const URLdiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    background-color: #80CC74;
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border: 1px solid rgba(120, 177, 89, 0.25);
    border-radius: 12px;
    margin: 20px 0px;
`;

const Infos = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    color: white;
    font-size: 15px;
    cursor: pointer;
`;

const Trash = styled.div`
    background-color: white;
    width: 8%;
    height: 100%;
    border-radius: 0px 12px 12px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    ion-icon {
        font-size: 25px;
        color: red;
    }
`;