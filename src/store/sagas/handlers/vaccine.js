import { call, put } from "@redux-saga/core/effects";
import { LIST_VACCINES_SUCCESS } from "../../reducers/vaccines/vaccineReducer";
import { getVaccines } from '../requests/vaccine';

export function* handleGetVaccines(action) {
  try {
    const response = yield call(getVaccines);
    const { data } = response;
    yield put({type: LIST_VACCINES_SUCCESS, vaccines: data.result});
  }
  catch(error) {
    yield { message: error }
  }
}