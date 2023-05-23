import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* shortenUrl(action) {
  try {
    const response = yield call(axios.get, `https://api.shrtco.de/v2/shorten?url=${action.payload}`);
    yield put({ type: 'SHORTEN_URL_SUCCESS', payload: response.data.result.full_short_link });
  } catch (e) {
    yield put({ type: 'SHORTEN_URL_FAILURE', payload: e.message });
  }
}

function* urlSaga() {
  yield takeLatest('SHORTEN_URL_REQUEST', shortenUrl);
}

export default urlSaga;
