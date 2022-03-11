import styled from 'styled-components'

export const Container = styled.section` 
    background-color: rgb(5 9 34 / 4%);
    max-width: 100%;
    height: auto;
    color: beige;
    display: flex;
    align-items: center;
    padding-bottom: 20px;

    a {
        text-decoration: none;
    }

    @media (max-width: 600px){
        flex-direction: column;
        text-align: center;
    }
`;

export const ColumnImage = styled.div` 
    width: 50%;
    height: auto;
    color: beige;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        max-width: 100%;
        width: 38rem;
        height: auto;
        position: relative;
    }

    @media (max-width: 600px){
        width: 100%;
    }
`;

export const ColumnTitle= styled.div` 
    width: 50%;
    height: auto;
    color: beige;
    margin: 10px 25px;

    p {
        font-size: 50px;
        font-weight: 500;
        color: #4253b6;
    }

    label { 
        font-size: 30px;
        color: black;
    }

    button { 
        border: 2px solid white;
        margin-top: 25px;
    }


    @media (max-width: 600px){
        width: 100%;
    }
`;

export const DivIcon = styled.div`
    bottom: 11.4rem;
    display: block;
    position: fixed;
    right: 8rem;
    z-index: 999;
    width: 0rem;

    @media (max-width: 600px){
        bottom: 5.4rem;
        position: fixed;
        right: 7rem;
        width: 0rem;
    }

    a {
        text-decoration: none;
    }

    img {
        width: 6rem;

            @media (max-width: 600px){
                width: 5rem;
        }
    }
`;