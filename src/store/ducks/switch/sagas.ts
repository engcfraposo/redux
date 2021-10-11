import { put } from 'redux-saga/effects';
import { finish } from './actions';

export function* switchA({payload}: any) {
    console.log("A")
    yield put(finish())
}

export function* switchB({payload}: any) {
    console.log("B")
    yield put(finish())
}

export function* switchC({payload}: any) {
    console.log("C")
    yield put(finish())
}

export function* switchD({payload}: any) {
    console.log("D")
    yield put(finish())
}