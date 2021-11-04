
import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* attemptLogin(action) {
  try {
    const response = yield axios.post("/api/user/login", action.payload);
    yield put({ type: "LOGIN", payload: response.data[0]});
  } catch (error) {
    console.log("Error with adding a new item:", error);
  }
}

function* itemSaga() {
yield takeLatest('ATTEMPT_LOGIN', attemptLogin);
}

export default itemSaga;