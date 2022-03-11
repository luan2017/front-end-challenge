import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background-color: rgb(5 9 34 / 4%);
    height: auto;
    padding-bottom: 20px;
    min-height: 75vh;

    h3 {
        text-align: center;
        font-size: 30px;
        color: #4253b6;
        margin: 8rem 1rem;
    }
`;

export const Title = styled.h1`
    font-size: 28px;
    text-align: center;
    padding-top: 20px;
    margin-top: 0px;
    font-weight: 500;
`;

export const ContainerCards = styled.div`
    display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 20px;

    @media (max-width: 800px){
        grid-template-columns: 1fr 1fr;
        grid-gap: 15px;
    }

    @media (max-width: 500px){
        grid-template-columns: 1fr;
        grid-gap: 20px;
    }
`;





