import styled from "styled-components";

const MainContainer = styled.main`
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const FormContainer = styled.form`
    position: relative;
    height: 80vh;
    width: 80vw;

    

    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: row;
    grid-gap: 10%;

`;
export { MainContainer, FormContainer };