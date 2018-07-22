import { fork } from 'redux-saga/effects';
import { indexNewsOnEnter } from './news-saga';

export default function * root () {

  yield fork(indexNewsOnEnter);
}
