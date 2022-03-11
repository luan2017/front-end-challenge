import React, { useEffect, useState } from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import TextField from '@material-ui/core/TextField';
import { useFormik } from 'formik';
import { useHistory } from "react-router-dom";

import * as S from './styles';
import { Button } from '@material-ui/core';
import { ClinicProps, ViaCepProps } from '../../Utils/Types'
import { createClinic, getClinicById, updateClinic } from '../../Services/clinicService';
import { validationSchemaClinic, initialValuesClinic } from '../../Validations/index';
import axios from 'axios';
import { maskCpf } from '../../Utils/Masks';

const RegisterClinic: React.FC = () => {
  const [responseViaCep, setResponseApiCep] = useState<ViaCepProps>({});
  const isResponseApiCep = Object.values(responseViaCep).length > 0;
  const storageId = localStorage.getItem('idClinic');
  const idClinic = storageId && storageId.toString() || '';
  const history = useHistory();  

  const formik = useFormik({
    initialValues: initialValuesClinic,
    validationSchema: validationSchemaClinic,
    onSubmit: (values: ClinicProps) => {
      if (idClinic) {
        updateClinic(values)
          .then(() => history.push('/clinicas'))
          .catch((err) => { console.log(err) });
      } else {
        createClinic(values)
        .then(() => history.push('/clinicas'))
        .catch((err) => { console.log(err) });
      }
    },
  });
  const { errors, touched, handleSubmit, values, handleBlur, handleChange, setFieldValue, isSubmitting, setValues } = formik;
  const isLengthCep = values.address.cep.length === 8;

  useEffect(() => {
    if (isLengthCep) {
      const cepValue = values.address.cep;
      axios.get(`https://viacep.com.br/ws/${cepValue}/json`)
        .then(( response) => response.status === 200 && !response.data.erro ? setResponseApiCep(response.data) : handleClearAddress())
        .catch(() => {return handleClearAddress()});
    }
  }, [values.address.cep])

  const handleClearAddress = () => {
      setResponseApiCep({})
      setFieldValue('address.street', '');
      setFieldValue('address.district', '');
      setFieldValue('address.city', '');
      setFieldValue('address.state', '');
      setFieldValue('address.complement', '');
  }

  useEffect(() => {
    if (isResponseApiCep) {
      setFieldValue('address.street', responseViaCep.logradouro);
      setFieldValue('address.district', responseViaCep.bairro);
      setFieldValue('address.city', responseViaCep.localidade);
      setFieldValue('address.state', responseViaCep.uf);
      setFieldValue('address.complement', responseViaCep.complemento);
    }
  }, [isResponseApiCep])

  useEffect(() => {
    idClinic && getClinicById(idClinic).then(response => {
      if (response) {
        setValues(response);
      }
    }).catch(err => {});

  }, [])
  
  useEffect(() => {
    return () => localStorage.clear();
  }, []);
  
    return (
        <>
        <Header />
          <S.Container>
          <S.TitleContainer>Dados da clínica</S.TitleContainer>
          <S.ContainerForm>
            <form onSubmit={handleSubmit} autoComplete="off">
            <S.FormItem>
                <TextField 
                  id="name"
                  name="name"
                  onBlur={handleBlur}
                  value={values.name}
                  onChange={handleChange}
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                  label="Nome"
                  variant="outlined"
                  required
                  fullWidth
                />
            </S.FormItem>
            <S.FormItem>
                <TextField 
                  id="cpf"
                  name="cpf"
                  onBlur={handleBlur}
                  value={maskCpf(values.cpf)}
                  onChange={handleChange}
                  error={touched.cpf && Boolean(errors.cpf)}
                  helperText={touched.cpf && errors.cpf}
                  label="CPF"
                  variant="outlined"
                  required
                  fullWidth
                  inputProps={{ maxLength: 14}}
                />
            </S.FormItem>
            <S.FormItem>
                <TextField 
                  id="capital"
                  name="capital"
                  onBlur={handleBlur}
                  value={values.capital}
                  onChange={handleChange}
                  error={touched.capital && Boolean(errors.capital)}
                  helperText={touched.capital && errors.capital}
                  label="Capital Social"
                  variant="outlined"
                  required
                  fullWidth
                />
            </S.FormItem>
            <S.TitleAddress>Endereço</S.TitleAddress>
            <S.FormItem>
                <TextField 
                  id="address.cep"
                  name="address.cep"
                  onBlur={handleBlur}
                  value={values.address.cep}
                  onChange={handleChange}
                  error={touched.address && touched.address.cep && Boolean(errors.address && errors.address.cep)}
                  helperText={touched.address && touched.address.cep && errors.address && errors.address.cep}
                  label="CEP"
                  variant="outlined"
                  fullWidth
                  required
                  inputProps={{ maxLength: 8 }}
                />
                <TextField 
                  id="address.addressNumber"
                  name="address.addressNumber"
                  onBlur={handleBlur}
                  value={values.address.addressNumber}
                  onChange={handleChange}
                  error={touched.address && touched.address.addressNumber && Boolean(errors.address && errors.address.addressNumber)}
                  helperText={touched.address && touched.address.addressNumber && errors.address && errors.address.addressNumber}
                  label="Número"
                  variant="outlined"
                  required
                  fullWidth
                  inputProps={{ maxLength: 6}}
                />
            </S.FormItem>
            <S.FormItem>
                <TextField 
                  id="address.street"
                  name="address.street"
                  onBlur={handleBlur}
                  value={values.address.street}
                  onChange={handleChange}
                  error={touched.address && touched.address.street && Boolean(errors.address && errors.address.street)}
                  helperText={touched.address && touched.address.street && errors.address && errors.address.street}
                  label="Rua"
                  variant="outlined"
                  required
                  fullWidth
                  disabled={isResponseApiCep}
                />
            </S.FormItem>
            <S.FormItem>
                <TextField 
                  id="address.district"
                  name="address.district"
                  onBlur={handleBlur}
                  value={values.address.district}
                  onChange={handleChange}
                  error={touched.address && touched.address.district && Boolean(errors.address && errors.address.district)}
                  helperText={touched.address && touched.address.district && errors.address && errors.address.district}
                  label="Bairro"
                  variant="outlined"
                  required
                  fullWidth
                  disabled={isResponseApiCep}
                />
            </S.FormItem>
            <S.FormItem>
                <TextField 
                  id="address.complement"
                  name="address.complement"
                  onBlur={handleBlur}
                  value={values.address.complement}
                  onChange={handleChange}
                  error={touched.address && touched.address.complement && Boolean(errors.address && errors.address.complement)}
                  helperText={touched.address && touched.address.complement && errors.address && errors.address.complement}
                  label="Complemento"
                  variant="outlined"
                  fullWidth
                />
            </S.FormItem>
            <S.FormItem>
                <TextField 
                  id="address.city"
                  name="address.city"
                  onBlur={handleBlur}
                  value={values.address.city}
                  onChange={handleChange}
                  error={touched.address && touched.address.city && Boolean(errors.address && errors.address.city)}
                  helperText={touched.address && touched.address.city && errors.address && errors.address.city}
                  label="Cidade"
                  variant="outlined"
                  required
                  fullWidth
                  disabled={isResponseApiCep}
                />
                <TextField 
                  id="address.state"
                  name="address.state"
                  onBlur={handleBlur}
                  value={values.address.state}
                  onChange={handleChange}
                  error={touched.address && touched.address.state && Boolean(errors.address && errors.address.state)}
                  helperText={touched.address && touched.address.state && errors.address && errors.address.state}
                  label="Estado"
                  variant="outlined"
                  required
                  fullWidth
                  inputProps={{ maxLength: 2 }}
                  disabled={isResponseApiCep}
                />
            </S.FormItem>
            </form>
          </S.ContainerForm>
          <S.ButtonSave>
              <Button onClick={() => handleSubmit()} disabled={isSubmitting} variant="contained" type="submit" color="primary">Salvar</Button>
          </S.ButtonSave>
          </S.Container>
        <Footer />
        </>
  );
}

export default RegisterClinic;