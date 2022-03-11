import React from 'react';

import * as S from './styles';

const Footer: React.FC = () => {
    const date = new Date().getFullYear();

    return (
        <>
        <S.Footer>
            <S.ColumnText>
                <p>IClinic</p>
                <span>Quem somos</span>
                <span>Nossa história</span>
                <span>Trabalhe com a gente</span>
            </S.ColumnText>
            <S.ColumnText>
                <p>Pra você</p>
                <span>Funcionalidades</span>
                <span>Planos e Preços</span>
                <span>Entrar no IClinic</span>
            </S.ColumnText>
            <S.ColumnText>
                <p>Funcionalidades</p>
                <span>Home</span>
                <span>Cadastrar clínicas</span>
                <span>Exibir clínicas</span>
            </S.ColumnText>
        </S.Footer>
        <S.Asign>by Wanderson Pinho - © {date}</S.Asign>
        </>
  );
}

export default Footer;