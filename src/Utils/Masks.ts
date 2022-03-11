
export const maskCpf = (value: string) => {
    const cnpjCpf = value.toString().replace(/\D/g, "");

    return cnpjCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
}


export const maskMoney = (value: string) => {
    const money = value.toString().replace(/\D/g, "");
    
    return Number(money).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}