import styled from 'styled-components';

export const Container = styled.section`
    max-width: 100%;
    min-height:85vh;
    height: auto;
    background-color: rgb(5 9 34 / 4%);
    margin: 0px 5% 5% 5%;
    border-radius: 20px;
    box-shadow: 0px 0px 0.8em gray;
    display: flex;
    flex-direction: column;
    align-items: center;

    a{
        text-decoration: none;
    }
`;


export const TitleContainer = styled.h2`
    font-size: 22px;
    text-align: center;
    padding-top: 20px;
    margin-top: 0px;
    font-weight: 400;

    @media (max-width: 600px){
        font-size: 1.3rem;
    }
`;

export const ContainerForm = styled.div`
    width: 60%;

    @media (max-width: 600px){
        width: 90%;
    }
`;

export const FormItem = styled.div`
    margin-top: 1rem;
    width: 100%;
    display: flex;
`;

export const TitleAddress = styled.h2`
    font-size: 22px;
    text-align: center;
    padding-top: 20px;
    font-weight: 400;

    @media (max-width: 600px){
        font-size: 1.3rem;
    }
`;

export const ButtonSave = styled.div`
    display: flex;
    margin: 20px 0px;

    button {
        width: 15rem;
    }
`;