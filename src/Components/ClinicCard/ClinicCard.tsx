import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { deleteClinicById } from '../../Services/clinicService';
import { maskCpf, maskMoney } from '../../Utils/Masks';
import { ClinicProps } from '../../Utils/Types';

import * as S from './styles';

const ClinicCard: React.FC<{ clinic: ClinicProps }> = ({ clinic }) => {
    const history = useHistory();  

    const handleRedirecttoUpdate = (id: string) => {
        if (id) {
            localStorage.setItem('idClinic', id);
            history.push(`/atualizacao-clinica/${id}`)
        }
    } 

    
    return (
        <S.ContainerCard>
            <S.TitleCard>{`Clínica ${clinic.name}`}</S.TitleCard>
            <S.LabelAndValue>
                <b>CPF: </b>{maskCpf(clinic.cpf)}
            </S.LabelAndValue>
            <S.LabelAndValue>
                <b>Capital Social: </b>{maskMoney(clinic.capital)}
            </S.LabelAndValue>
            <br />
            <S.TitleCard>Endereço</S.TitleCard>
            <S.LabelAndValue>
                <b>CEP: </b>{clinic.address.cep}
            </S.LabelAndValue>
            <S.LabelAndValue>
                <b>Endereço: </b> {clinic.address.street}
            </S.LabelAndValue>
            <S.LabelAndValue>
                <b>Número: </b>{clinic.address.addressNumber}
            </S.LabelAndValue>
            <S.LabelAndValue>
                <b>Complemento: </b>{clinic.address.complement}
            </S.LabelAndValue>
            <S.LabelAndValue>
                <b>Bairro: </b>{clinic.address.district}
            </S.LabelAndValue>
            <S.LabelAndValue>
                <b>Cidade: </b>{clinic.address.city}
            </S.LabelAndValue>
            <S.LabelAndValue>
                <b>Estado: </b>{clinic.address.state}
            </S.LabelAndValue>
            <S.ButtonsActions>
                <Button variant='contained' color='secondary' onClick={() => deleteClinicById(clinic.id || "")}>Excluir</Button>
                <Button variant='contained' color='inherit' onClick={() => handleRedirecttoUpdate(clinic.id || "")}>Editar</Button>
            </S.ButtonsActions>
        </S.ContainerCard>
  );
}

export default ClinicCard;