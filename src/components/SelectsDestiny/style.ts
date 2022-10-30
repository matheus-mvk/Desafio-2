import styled from "styled-components";

const FieldContainer = styled.fieldset`
    position: relative;
    height: 85%;
    width: 100%;
    border: 0.2rem solid black;
    margin: 0 auto auto auto;

    

    display: flex;
    align-items: center;
    flex-direction: column;

    & > select {
        height: 7%;
        width: 85%;
        margin: auto;
    
        border-radius: 1px;

        font-size: 10px;

        & > option{
            font-size: 10px;
        } 
    }

`;
const Title2 = styled.h2`
    
    margin-top: 2%;

    color: black;

    font-weight: 400;
    font-size: 1rem;
`;

const InputData = styled.input`
    height: 6%;
    width: 80%;
    margin: auto;

    border-radius: 1px;
    box-shadow: none;
    color: black;

`;




export {FieldContainer, Title2, InputData};