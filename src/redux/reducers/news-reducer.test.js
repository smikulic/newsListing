import {
  ACTION_UNKNOWN,
  newsMock,
  responseNewsMock,
} from '../../redux-test-helper';
import { news as reducer, initialState } from './news-reducer';
import { newsIndexLoadSuccess } from '../actions/news-actions';

const stateMock = {
  appState: {
    news: newsMock,
  },
};

describe('news reducer', () => {
  describe('with no given state and an unkown action', () => {
    it('returns the initial state', () => {
      expect(reducer(undefined, ACTION_UNKNOWN)).toEqual(initialState);
    });
  });
  describe('with a given state and an unkown action', () => {
    it('returns the given state', () => {
      const expectedState = stateMock;
      const currentState = stateMock;
      expect(reducer(currentState, ACTION_UNKNOWN)).toEqual(expectedState);
    });
  });
  describe('with no given state and a newsIndexLoadSuccess action', () => {
    it('returns the state with loaded news list', () => {
      const action = newsIndexLoadSuccess(responseNewsMock);
      const expectedState = {
        ...initialState,
        news: responseNewsMock,
      };
      const currentState = initialState;
      expect(reducer(currentState, action)).toEqual(expectedState);
    });
  });
});
