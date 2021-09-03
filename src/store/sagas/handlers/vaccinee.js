import { call, put } from "@redux-saga/core/effects";
import { LIST_VACCINEES_SUCCESS, GET_VACCINEE_SUCCESS, SET_VACCINEE_INPUT_CHANGE_SUCCESS } from "../../reducers/vaccinees/vaccineeReducer";
import { createVaccinee, deleteVaccinee, getVaccinee, getVaccinees, updateVaccinee } from "../requests/vaccinee";

export function* handleGetVaccinees() {
  try {
    const response = yield call(getVaccinees);
    const { data } = response;
    yield put({type: LIST_VACCINEES_SUCCESS, vaccinees: data.result});
  }
  catch(error) {
    yield { message: error }
  }
}

export function* handleCreateVaccinee(action) {
  const { vaccinee, callBack } = action;
  try {
    yield call(createVaccinee, vaccinee);
    yield call(callBack());
  } 
  catch(error) {
    yield { message: error }
  }
}

export function* handleGetVaccinee(action) {
  const { id } = action;

  try {
    const response = yield call(getVaccinee, id);
    const { data } = response;
    yield put({type: GET_VACCINEE_SUCCESS, vaccinee: data.result[0]});
  }
  catch(error) {
    yield { message: error}
  }
}

export function* handleSetInputChange(action) {
  const { value } = action;

  try {
    yield put({type: SET_VACCINEE_INPUT_CHANGE_SUCCESS, value});
  }
  catch(error) {
    yield { message: error }
  }
}

export function* handleUpdateVaccinee(action) {
  const { vaccinee, callBack } = action;
  try {
    yield call(updateVaccinee, vaccinee);
    yield call(callBack());
  } 
  catch(error) {
    yield { message: error }
  }
} 

export function* handleDeleteVaccinee(action) {
  const { id, callBack } = action;

  try {
    yield call(deleteVaccinee, id);
    yield call(callBack());
  }
  catch(error) {
    yield { message: error}
  }
}