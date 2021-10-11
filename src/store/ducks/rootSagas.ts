import * as Eff from 'redux-saga/effects';

import {
    switchA,
    switchB,
    switchC,
    switchD
} from "./switch/sagas"

import { SwitchTypes } from "./switch/types"

export default function* rootSaga(): any {
    const takeLatest: any = Eff.takeLatest;
    return yield Eff.all([
        takeLatest(SwitchTypes.SWITCH_A, switchA),
        takeLatest(SwitchTypes.SWITCH_B, switchB),
        takeLatest(SwitchTypes.SWITCH_C, switchC),
        takeLatest(SwitchTypes.SWITCH_D, switchD),
    ])
}