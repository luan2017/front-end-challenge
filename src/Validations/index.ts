import * as yup from 'yup';

export const validationSchemaClinic = yup.object().shape({
    id: yup.string(),
    name: yup.string().required('Nome é obrigatório'),
    cpf: yup.string().required('Cpf é obrigatório').min(11, 'Deve ter 11 dígitos'),//.matches(/^(\d{3}\.){2}\d{3}\-\d{2}$/, 'CPF invalido'),
    capital: yup.string().required('Capital Social é obrigatório'),
    address: yup.object().shape({
      cep: yup.string().required('CEP é obrigatório').max(8, 'Um Cep tem no máximo 8 dígitos'),
      addressNumber: yup.string().required('Número é obrigatório'),
      street: yup.string().required('Rua é obrigatório'),
      complement: yup.string(),
      district: yup.string().required('Bairro é obrigatório'),
      city: yup.string().required('Cidade é obrigatório'),
      state: yup.string().required('Estado é obrigatório'),
    }).required(),
})

export const initialValuesClinic  = {
    id: '',
    name: '',
    cpf: '',
    capital: '',
    address: {
      cep: '',
      addressNumber: '',
      street: '',
      complement: '',
      district: '',
      city: '',
      state: '',
    },
  }