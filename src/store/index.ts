import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from "./ducks/rootReducer";
import rootSagas from "./ducks/rootSagas";
import { SwitchState } from './ducks/switch/types';

export interface ApplicationState {
    switch: SwitchState
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSagas);

export { store }