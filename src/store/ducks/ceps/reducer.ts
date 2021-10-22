import produce from 'immer';
import { CepsState, CepsTypes, Local } from "./types";

const INITIAL_STATE: CepsState = {
    local: {} as Local,
    loading: false
}

export default function ceps(state: CepsState = INITIAL_STATE, action: any = null){
    return produce(state, (newState: CepsState) => {
        switch (action.type) {
            case CepsTypes.GET_CEPS:
                newState.local = {} as Local
                newState.loading = true
                break;
            case CepsTypes.GET_CEPS_FINISH:
                newState.local = action.payload as Local
                newState.loading = false
                break;
            default:
                break;
        }
    }) 
}