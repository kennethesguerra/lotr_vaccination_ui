import { takeLatest } from "@redux-saga/core/effects";
import { CREATE_VACCINEE_REQUESTED, 
  LIST_VACCINEES_REQUESTED, 
  GET_VACCINEE_REQUESTED, 
  SET_VACCINEE_INPUT_CHANGE_REQUESTED, 
  UPDATE_VACCINEE_REQUESTED,
  DELETE_VACCINEE_REQUESTED} from "../reducers/vaccinees/vaccineeReducer";
import { handleGetVaccinees, 
  handleCreateVaccinee, 
  handleGetVaccinee, 
  handleSetInputChange, 
  handleUpdateVaccinee, 
  handleDeleteVaccinee} from "./handlers/vaccinee";
import { handleGetVaccines } from "./handlers/vaccine";
import { LIST_VACCINES_REQUESTED } from "../reducers/vaccines/vaccineReducer";

export function* watcherSaga() {
  yield takeLatest(LIST_VACCINEES_REQUESTED, handleGetVaccinees);
  yield takeLatest(LIST_VACCINES_REQUESTED, handleGetVaccines);
  yield takeLatest(CREATE_VACCINEE_REQUESTED, handleCreateVaccinee);
  yield takeLatest(GET_VACCINEE_REQUESTED, handleGetVaccinee);
  yield takeLatest(SET_VACCINEE_INPUT_CHANGE_REQUESTED, handleSetInputChange);
  yield takeLatest(UPDATE_VACCINEE_REQUESTED, handleUpdateVaccinee);
  yield takeLatest(DELETE_VACCINEE_REQUESTED, handleDeleteVaccinee);
}