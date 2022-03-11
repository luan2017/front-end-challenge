export interface AddressProps  {
    cep: string;
    addressNumber: string;
    street: string;
    complement?: string;
    district: string;
    city: string;
    state: string;
}

export interface ClinicProps  {
    id?: string;
    name: string;
    cpf:  string;
    capital: string;
    address: AddressProps,
}

export interface ViaCepProps {
    cep?: string;
    logradouro?: string;
    complemento?: string;
    bairro?: string;
    localidade?: string;
    uf?: string;
    ibge?: string;
    gia?: string;
    ddd?: string;
    siafi?: string;
}