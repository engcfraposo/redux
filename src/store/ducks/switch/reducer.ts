import produce from 'immer';
import { SwitchState, SwitchTypes } from "./types";


const INITIAL_STATE: SwitchState = {
    A: false,
    B: false,
    C: false,
    D: false
}

export default function switchs(state = INITIAL_STATE, action: any = null){
    return produce(state, newState => {
        switch (action.type) {
            case SwitchTypes.SWITCH_A:
                newState.A = !state.A    
                break;
            case SwitchTypes.SWITCH_B:
                newState.B = !state.B    
                break;
            case SwitchTypes.SWITCH_C:
                newState.C = !state.C    
                break;
            case SwitchTypes.SWITCH_D:
                newState.D = !state.D    
                break;
            default:
                break;
        }
    })
}