import styled from 'styled-components';

export const Header = styled.header`
    width: 100%;
    background-color: white;
    padding: 20px 5px;
    display: flex;

    a {
        text-decoration: none;
    }


    @media (max-width: 425px){
        flex-direction: column;
    }
`;

export const ColumnLogo = styled.div`
    width: 50%;
    
    span {
        font-size: 25px;
        font-family: monospace;
        font-weight: bold;
        color: #4253b6;
        text-shadow: 0 0 0.1em #87F, 0 0 0.1em #87F,0 0 0.1em #87F;
        cursor: pointer;
        margin-left: 20px;
    }

    @media (max-width: 425px){
        width: 100%;
        text-align: center;
        margin-bottom: 5px;
    }
`;

export const ColumnButtons = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-evenly;

    @media (max-width: 425px){
        width: 100%;
    }
`;
