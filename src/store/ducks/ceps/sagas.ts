import { put, call } from 'redux-saga/effects';
import { getCepsFinish } from './actions';
import api from '../../../api'

export function* getCeps({payload}: any) {
    try {
        const url = `/50721260/json`
        console.log("iniciou sagas getCeps")
        const { data } = yield call(api.get, url)
        yield put(getCepsFinish(data))
    } catch (error) {
        console.log(error)
    }
}
