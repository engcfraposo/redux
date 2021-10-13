import { put } from 'redux-saga/effects';
import { finish } from './actions';

export function* switchA({payload}: any) {
    console.log("iniciou sagas A")
    yield put(finish())
}

export function* switchB({payload}: any) {
    console.log("iniciou sagas B")
    yield put(finish())
}

export function* switchC({payload}: any) {
    console.log("iniciou sagas C")
    yield put(finish())
}

export function* switchD({payload}: any) {
    console.log("iniciou sagas D")
    yield put(finish())
}