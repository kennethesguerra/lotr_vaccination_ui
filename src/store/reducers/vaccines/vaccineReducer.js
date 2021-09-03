
export const LIST_VACCINES_REQUESTED = 'LIST_VACCINES_REQUESTED';
export const LIST_VACCINES_SUCCESS = 'LIST_VACCINES_SUCCESS';

const initState = {
  vaccines: []
}

const vaccineReducer = (state = initState, action) => {
  switch(action.type) {
    case 'LIST_VACCINES_REQUESTED': 
      return  {
        ...state
      }
    case 'LIST_VACCINES_SUCCESS':
      return {
        ...state, 
        vaccines: action.vaccines
      }
    default: 
      return state;
  }
}

export default vaccineReducer;