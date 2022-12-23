import styled from "styled-components";

export default function Home() {
    const links = [];
    links.push(
    <Link>
        <Infos>
            <p>URL original</p>
            <p>URL curta</p>
            <p>Quantidade de visitantes: 03</p>
        </Infos>
        <Trash><ion-icon name="trash"></ion-icon></Trash>
    </Link>);
    links.push(
    <Link>
        <Infos>
            <p>URL original</p>
            <p>URL curta</p>
            <p>Quantidade de visitantes: 03</p>
        </Infos>
        <Trash><ion-icon name="trash"></ion-icon></Trash>
    </Link>);
    links.push(
    <Link>
        <Infos>
            <p>URL original</p>
            <p>URL curta</p>
            <p>Quantidade de visitantes: 03</p>
        </Infos>
        <Trash><ion-icon name="trash"></ion-icon></Trash>
    </Link>);

    return(
        <Container>
            <form>
                <input type="text" placeholder="Links que cabem no bolso" />
                <button>Encurtar link</button>
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

const Link = styled.div`
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