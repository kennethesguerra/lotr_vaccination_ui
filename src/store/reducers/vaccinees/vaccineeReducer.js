export const LIST_VACCINEES_REQUESTED = 'LIST_VACCINEES_REQUESTED';
export const LIST_VACCINEES_SUCCESS = 'LIST_VACCINEES_SUCCESS';
export const CREATE_VACCINEE_REQUESTED = 'CREATE_VACCINEE_REQUESTED';
export const CREATE_VACCINEE_SUCCESS = 'CREATE_VACCINEE_SUCCESS';
export const GET_VACCINEE_REQUESTED = 'GET_VACCINEE_REQUESTED';
export const GET_VACCINEE_SUCCESS = 'GET_VACCINEE_SUCCESS';
export const SET_VACCINEE_INPUT_CHANGE_SUCCESS = 'SET_VACCINEE_INPUT_CHANGE_SUCCESS';
export const SET_VACCINEE_INPUT_CHANGE_REQUESTED = 'SET_VACCINEE_INPUT_CHANGE';
export const UPDATE_VACCINEE_REQUESTED = 'UPDATE_VACCINEE_REQUESTED';
export const DELETE_VACCINEE_REQUESTED = 'DELETE_VACCINEE_REQUESTED';

export const listVaccinees = () => ({
  type: LIST_VACCINEES_REQUESTED
})

const initState = {
  vaccinees: [],
  vaccinee: {},
  isCreateSuccess: false 
}

const vaccineeReducer = (state = initState, action) => {
  switch(action.type) {
    case 'LIST_VACCINEES_REQUESTED': 
      return {
        ...state
      }
    case 'LIST_VACCINEES_SUCCESS':
      return {
        ...state, 
        vaccinees: action.vaccinees
      }
    case 'SET_VACCINEE_INPUT_CHANGE_SUCCESS': 
      return {
        ...state, 
        vaccinee: Object.assign(state.vaccinee, action.value)
      }
    case 'CREATE_VACCINEE_REQUESTED':
      return {
        ...state
      }
    case 'CREATE_VACCINEE_SUCCESS':
      return {
        ...state,
        isCreateSuccess: action.isCreateSuccess
      }
    case 'GET_VACCINEE_REQUESTED':
      return {
        ...state
      }
    case 'GET_VACCINEE_SUCCESS':
      return {
        ...state,
        vaccinee: action.vaccinee
      }
    case 'UPDATE_VACCINEE_REQUESTED':
      return {
        ...state
      }
    case 'DELETE_VACCINEE_REQUESTED':
      return {
        ...state
      }
    default: {
      return state;
    }
  }
}

export default vaccineeReducer