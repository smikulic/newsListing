import { call, put } from 'redux-saga/effects';
import { request } from '../lib/api';
import {
  responseNewsMock,
  getNewsMock,
} from '../redux-test-helper';
import {
  newsIndexLoadSuccess,
  newsIndexLoadFail,
} from '../redux/actions/news-actions';
import { indexNews } from './news-saga';

let actualYield;
let expectedYield;

describe('news saga', () => {
  // INDEX
  describe('indexNews ', () => {
    describe('when data is fetched successfully', () => {
      let iterator = indexNews();
      it('performs and parallel API call to get the news list', () => {
        actualYield = iterator.next().value;
        expectedYield = call(request, getNewsMock);
        expect(actualYield).toEqual(expectedYield);
      });
      it('stores news list in the state', () => {
        actualYield = iterator.next(responseNewsMock).value;
        expectedYield = put(newsIndexLoadSuccess(responseNewsMock.data.data));
        expect(actualYield).toEqual(expectedYield);
      });
      it('it should be done', () => {
        expect(iterator.next().done).toEqual(true);
      });
    });
    describe('when data is not fetched successfully', () => {
      let iterator = indexNews();
      it('performs and API call to get the news list', () => {
        actualYield = iterator.next().value;
        expectedYield = call(request, getNewsMock);
        expect(actualYield).toEqual(expectedYield);
      });
      it('triggers newsIndexLoadFail action', () => {
        actualYield = iterator.next().value;
        expectedYield = put(newsIndexLoadFail(`Cannot read property 'data' of undefined`));
        expect(actualYield).toEqual(expectedYield);
      });
      it('it should be done', () => {
        expect(iterator.next().done).toEqual(true);
      });
    });
  });
});
