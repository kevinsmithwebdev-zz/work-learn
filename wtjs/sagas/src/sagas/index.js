import { put, takeEvery } from 'redux-saga/effects';

function* workerSaga() {
  console.log('hey from worker');
  yield put({ type: 'ACTION_FROM_WORKER' });
};

//watcher saga
function* rootSaga() {
  yield takeEvery('HELLO', workerSaga);
};

// watcher saga -> action -> worker saga

export default rootSaga;