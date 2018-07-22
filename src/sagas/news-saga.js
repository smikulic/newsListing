import {
  put,
  call,
  takeEvery,
} from 'redux-saga/effects';
import { request } from '../lib/api';
import {
  newsIndexLoadSuccess,
  newsIndexLoadFail,
} from '../redux/actions/news-actions';

// INDEX
export function* indexNews() {
  try {
    const response = yield call(request, {
      url: 'https://publist.ai/api/v2/jobs.frontend',
      method: 'POST',
      payload: {
        'query': 'tech',
      },
     });
    yield put(newsIndexLoadSuccess(response.data.data));
  } catch (e) {
    yield put(newsIndexLoadFail(e.message));
  }
}

export function* indexNewsOnEnter() {
  yield takeEvery('news/INDEX_ENTER', indexNews);
}
