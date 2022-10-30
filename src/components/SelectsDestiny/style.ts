import styled from "styled-components";

const FieldContainer = styled.fieldset`
    position: relative;
    height: 85%;
    width: 100%;
    border: 0.2rem solid black;
    margin: 0 auto auto auto;

    

    display: flex;
    
    flex-direction: column;
    

    & > select {
        height: 7%;
        width: 85%;
        margin: auto;
    
        border-radius: 1px;

    }

`;
const Title2 = styled.h2`
    
    margin-top: 2%;

    color: black;

    font-weight: 400;
    font-size: 1rem;
    text-align: center;
`;



const TextP = styled.p`
    color: black;

    font-weight: 300;
    font-size: 0.8rem;

    margin-left: 5%;
    margin-bottom: 15%;
    
    text-align: left;
`;


export {FieldContainer, Title2, TextP};