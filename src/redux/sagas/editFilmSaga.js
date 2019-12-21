import axios from 'axios';
import {put} from 'redux-saga/effects';

// Saga to EDIT selected film
function* editFilmSaga(action){
  try{
      console.log('in PUT saga with:', action.payload);
      yield axios.put(`/film/${action.payload.movie_id}`, action.payload);
      yield put({type: `GET_THIS_FILM`, payload: action.payload.movie_id});
  }
  catch(error){
      console.log('error in PUT film:', error);
  }
}

export default editFilmSaga;