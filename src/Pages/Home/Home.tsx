import React, { useEffect, useState } from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import MedicalImage from '../../Assets/medical.png'
import WhatsIcon from '../../Assets/Icons/icon-whats.png'
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import * as S from './styles';

const Home: React.FC = () => {

    return (
        <>
            <Header />
            <S.Container>
                <S.ColumnImage>
                    <img alt="" src={MedicalImage}/>
                </S.ColumnImage>
                <S.ColumnTitle>
                    <p>Cadastre suas clínicas com apenas um clique!</p>
                    <label>
                        O método de cadastro é bem simples e intuitivo. Finalize em menos de 30 segundos e mantenha suas clínicas sempre atualizadas!
                    </label>
                    <br />
                    <Link to="/cadastro-clinica">
                        <Button variant="contained" color="primary">Cadastrar agora</Button>
                    </Link>
                </S.ColumnTitle>
                <S.DivIcon> 
                    <a href="https://api.whatsapp.com/send?phone=5516997636836&text=Oi,%20iClinic!%20Voc%C3%AAs%20poderiam%20me%20ajudar,%20por%20favor" target={'_blank'}>
                        <img alt="" src={WhatsIcon}/>
                    </a>
            </S.DivIcon>
            </S.Container>
            <Footer />
        </>
  );
}

export default Home;