import axios from 'axios';
import toast from 'react-hot-toast';
import { ClinicProps } from '../Utils/Types';

const baseUrl = 'https://62239aac3af069a0f9a64541.mockapi.io/api/v1/clinic'

export async function getClinics() : Promise<any> {
    try {
      const response = await axios.get(baseUrl);
      if (response.data.length > 0) {
        // toast.success('Clínicas buscada com sucesso!');
        return response.data;
      }
    } catch (err) {}
}

export async function getClinicById(id: string): Promise<any> {
    try {
      const response = await axios.get(`${baseUrl}/${id}`);
      if (response.data) {
          return response.data;
      }
    } catch (err) {}
}

export async function createClinic(clinic: ClinicProps): Promise<any> {
    try {
        const response = await axios.post(`${baseUrl}`, {
          ...clinic
      });
      if (response.status === 201) {
          toast.success('Clínica cadastrada com sucesso!')
      }
    } catch (err) {}
}

export async function updateClinic(clinic: ClinicProps): Promise<any> {
    try {
        const response = await axios.put(`${baseUrl}/${clinic.id}`, {
          ...clinic
      });
      if (response.status === 200) {
        toast.success('Clínica atualizada com sucesso!')
      }
    } catch (err) {}
}

export async function deleteClinicById(id: string): Promise<any> {
    try {
      const response = await axios.delete(`${baseUrl}/${id}`);
      if (response.data) {
        toast.success('Clínica deletada com sucesso!')
         location.reload();
      }
    } catch (err) {}
}