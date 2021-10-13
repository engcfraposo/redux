import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from "./ducks/rootReducer";
import rootSagas from "./ducks/rootSagas";
import { SwitchState } from './ducks/switchs/types';
import { CepsState } from './ducks/ceps/types';

export interface ApplicationState {
    switchs: SwitchState
    ceps: CepsState
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSagas);

export { store }