
import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* sendSupaColor(action) {
  try {
    yield axios.post("/api/user/login", action.payload);
    yield put({ type: "LOGIN" });
  } catch (error) {
    console.log("Error with adding a new item:", error);
  }
}

function* itemSaga() {
yield takeLatest('SEND_SUPACOLOR', sendSupaColor);
}

export default itemSaga;