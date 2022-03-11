import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import * as S from './styles';


const Loading: React.FC = () => {
    return (
    <S.ContainerSpinner>
        <CircularProgress size={60} color="secondary" /> 
    </S.ContainerSpinner>
  );
}

export default Loading;