import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import * as S from './styles';

const Header: React.FC = () => {
    return (
        <S.Header>
            <S.ColumnLogo>
            <Link to="/">
                    <span>IClinic</span>
            </Link>
            </S.ColumnLogo>
            <S.ColumnButtons>
            <Link to="/cadastro-clinica">
                <Button variant="outlined" color="primary" >Cadastrar Clínicas</Button>
            </Link>
            <Link to="/clinicas">    
                <Button variant="outlined" color="primary"> Exibir Clínicas</Button>
            </Link>
            </S.ColumnButtons>
      </S.Header>
  );
}

export default Header;