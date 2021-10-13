import { action } from 'typesafe-actions';
import { SwitchTypes } from "./types"

export const switchA = () => {
    console.log("iniciou action A")
    return action(SwitchTypes.SWITCH_A)
}

export const switchB = () => {
    console.log("iniciou action B")
    return action(SwitchTypes.SWITCH_B)
}

export const switchC = () => {
    console.log("iniciou action C")
    return action(SwitchTypes.SWITCH_C)
}

export const switchD = () => {
    console.log("iniciou action D")
    return action(SwitchTypes.SWITCH_D)
}

export const finish = () => {
    console.log("finish")
    return action(SwitchTypes.FINISH)
}