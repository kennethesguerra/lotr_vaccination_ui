import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../store/rootReducer';
import createSagaMiddleware from 'redux-saga'
import { watcherSaga } from '../store/sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, {}, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watcherSaga);

export default store;