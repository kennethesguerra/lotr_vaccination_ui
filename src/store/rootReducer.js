import { combineReducers } from "redux";

import vaccineeReducer from "./reducers/vaccinees/vaccineeReducer";
import vaccineRedcuer from "./reducers/vaccines/vaccineReducer";

const rootReducer = combineReducers({
  vaccinees: vaccineeReducer,
  vaccines: vaccineRedcuer
})

export default rootReducer

