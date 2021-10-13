import { action } from "typesafe-actions"
import { CepsTypes, Local } from "./types"

export const getCeps = (cep: string) => {
    console.log("iniciou action getCeps")
    return action(CepsTypes.GET_CEPS, cep)
}

export const getCepsFinish = (local: Local) => {
    console.log("iniciou action getCepsFinish")
    return action(CepsTypes.GET_CEPS_FINISH, local)
}