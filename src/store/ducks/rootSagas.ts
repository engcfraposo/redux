import * as Eff from 'redux-saga/effects';

import * as SwitchSagas from "./switchs/sagas"
import { SwitchTypes } from "./switchs/types"

import * as CepsSagas from "./ceps/sagas"
import { CepsTypes } from "./ceps/types"

export default function* rootSaga(): any {
    const takeLatest: any = Eff.takeLatest;
    return yield Eff.all([
        takeLatest(SwitchTypes.SWITCH_A, SwitchSagas.switchA),
        takeLatest(SwitchTypes.SWITCH_B, SwitchSagas.switchB),
        takeLatest(SwitchTypes.SWITCH_C, SwitchSagas.switchC),
        takeLatest(SwitchTypes.SWITCH_D, SwitchSagas.switchD),

        takeLatest(CepsTypes.GET_CEPS, CepsSagas.getCeps),
    ])
}