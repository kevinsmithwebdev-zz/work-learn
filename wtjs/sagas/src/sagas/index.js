import { takeEvery } from 'redux-saga/effects';
import { IMAGES } from '../constants';

function* handleImagesLoad() {
  console.log('loading images')
};


//watcher saga
function* rootSaga() {
  yield takeEvery(IMAGES.LOAD, handleImagesLoad);

};

// watcher saga -> action -> worker saga

export default rootSaga;