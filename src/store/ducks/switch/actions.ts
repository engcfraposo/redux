import { action } from 'typesafe-actions';
import { SwitchTypes } from "./types"

export const switchA = () => {
    return action(SwitchTypes.SWITCH_A)
}

export const switchB = () => {
    return action(SwitchTypes.SWITCH_B)
}

export const switchC = () => {
    return action(SwitchTypes.SWITCH_C)
}

export const switchD = () => {
    return action(SwitchTypes.SWITCH_D)
}

export const finish = () => {
    console.log("finish")
    return action(SwitchTypes.FINISH)
}