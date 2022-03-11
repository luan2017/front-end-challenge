import styled from 'styled-components';

export const Footer = styled.footer`
    width: 100%;
    height: auto;
    padding: 30px 0px;
    background-color: #4253b6;
    display: flex;
    justify-content: center;
    font-size: 14px;
    color: white;
    font-weight: 500;

    @media (max-width: 425px){
        flex-direction: column;
    }
`;



export const ColumnText = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;

    p{
        margin-top: 10px;
        font-size: 18px;
        font-weight: 500;
    }

    span {
        margin-top: 5px;
        font-size: 14px;
        font-weight: 300;
        cursor: pointer;
    }

    @media (max-width: 425px){
        width: 100%;
        text-align: center;
    }
`;

export const Asign = styled.div`
    background-color: #4253b6;
    width: 100%;
    height: 30px;
    color: white;
    font-size: 14px;
    text-align: center;
    padding-top: 25px;
    -webkit-margin-before: -1em;
`;