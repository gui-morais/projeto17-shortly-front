import styled from "styled-components"

export default function SignIn() {
    return(
        <Container>
            <form>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Senha" />
                <button>Entrar</button>
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