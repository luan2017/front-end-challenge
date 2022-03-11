import React, { useEffect, useState } from 'react';
import ClinicCard from '../../Components/ClinicCard/ClinicCard';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Loading from '../../Components/Loading/Loading';
import { getClinics } from '../../Services/clinicService';
import { ClinicProps } from '../../Utils/Types'

import * as S from './styles';

const Clinics: React.FC = () => {
    const [listClinics, setListClinics] = useState<ClinicProps[]>([]);
    const [loading, setLoading] = useState(false);
    const isList = listClinics && listClinics.length > 0;
   
    useEffect(() => {
        setLoading(true);
        getClinics().then(response => {
            setListClinics(response)
            setLoading(false)
        }).catch(err => setLoading(false));
    }, [])

    return (
        <>
            <Header />
            <S.Container>
                <S.Title>Clínicas Cadastradas</S.Title>
                <S.ContainerCards>
                {isList && !loading &&
                    listClinics.map(clinic => 
                        <ClinicCard key={clinic.id} clinic={clinic} />
                    )
                 }
                </S.ContainerCards>
                {!loading && !isList && <h3>Desculpe, você não tem nenhuma clínica cadastrada :(</h3>}
                {loading && <Loading />}
            </S.Container>
            <Footer />
        </>
  );
}

export default Clinics;