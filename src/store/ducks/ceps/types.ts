export interface Local {
    cep: string,
    logradouro: string,
    complemento: string,
    bairro: string,
    localidade: string,
    uf: string,
    ibge: string,
    gia: string,
    ddd: string,
    siafi: string   
}

export interface CepsState {
    local?: Local,
    loading: boolean
}

export enum CepsTypes{
    GET_CEPS = "@switch/GET_CEPS",
    GET_CEPS_FINISH = "@switch/GET_CEPS_FINISH"
}