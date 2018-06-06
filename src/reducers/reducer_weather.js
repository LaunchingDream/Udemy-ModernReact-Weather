import {FETCH_WEATHER} from '../actions/index';

// fetch weather 액션을 다루는 리듀서
export default function (state = [], action) {
  // console.log('Action received', action);

  switch (action.type) {
    case FETCH_WEATHER:
      // return state.push(action.payload.data);
      return [ action.payload.data, ...state];
  }
  return state;

}