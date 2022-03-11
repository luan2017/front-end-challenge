import styled from 'styled-components';

export const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    background-color: #0022f70a;
    padding: 1rem 1.5rem;
    border-radius: 10px;
    margin-left: 1rem;
    box-shadow: 0 0 0.5em black;

    :hover {
        -moz-transform: scale(1.1);
        -webkit-transform: scale(1.1);
        transform: scale(1.05);
        box-shadow: 0 0 1em #0022f7;
    }

    @media (max-width: 500px){
       margin: 1rem;
    }
`;

export const TitleCard = styled.h2`
    font-weight: 600;
    font-size: 23px;
    margin-top: 1rem;
    margin-bottom: 0.3rem;
    color: #4254b7;
`;

export const LabelAndValue = styled.span`
    b {
        color: #4253b6;
    }
`;

export const ButtonsActions = styled.div`
    width: 100%;
    display: flex;
    margin: 1rem;
    align-items: center;
    justify-content: space-around;

    button {
        width: 40%;
    }
`;