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

    & > label{
        color: black;
        margin: auto 70% -2% 0;

        font-size: 0.8rem;
        
    }
    & > select {
        height: 5%;
        width: 80%;
        margin: auto;
    
        border-radius: 1px;
    }

`;
const InputDatas = styled.input`
    height: 6%;
    width: 80%;
    margin: auto;

    border-radius: 1px;
    box-shadow: none;
    color: black;

`;

const Title2 = styled.h2`
    
    margin-top: 2%;

    color: black;

    font-weight: 400;
    font-size: 1rem;
`;
export {FieldContainer, InputDatas, Title2};