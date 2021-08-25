import { DEPORTE } from '../../data/dataDeporte';
import { SELECT_DEPORTE } from '../actions/deporte.actions';

const INITIAL_STATE = {
  list: DEPORTE,
  selected: null,
}

const DeporteReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_DEPORTE:
      const categoriaIndex = state.list.findIndex(deporte => deporte.id === action.categoriaID)
      if (categoriaIndex === -1) return { ...state };
      return {
        ...state,
        selected: state.list[categoriaIndex],
      };
    default:
      return { ...state };
  }
}

export default DeporteReducer;