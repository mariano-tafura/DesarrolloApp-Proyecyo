import { ADD_TURNO, DELETE_TURNO,ADD_RESERVA } from "../actions/confirmacion.actions";

const INITIAL_STATE = {
  items: [],
  reservas:[],
  total: 0,
  confirm: false,
};

const sumTotal = list => list
  .map(item => item.quantity * item.precio)
  .reduce((a, b) => a + b, 0)

const ConfirmacionReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ADD_TURNO:
      const indexItem = state.items.findIndex(item => item.id === action.item.id);

      if (indexItem === -1) {
        const item = { ...action.item, quantity: 1 };
        const updated = state.items.concat(item);
        return {
          ...state,
          items: updated,
          total: sumTotal(updated),
        }
      }

      const updated = state.items.map(item => {
        if (item.id === action.item.id) item.quantity++;
        return item;
      })

      return {
        ...state,
        items: updated,
        total: sumTotal(updated),
      };

      case ADD_RESERVA:
          const indexReserva = state.reservas.findIndex(item => item.id === action.itemR.id);
    
          if (indexReserva === -1) {
            const item = { ...action.itemR, quantity: 1 };
            const updated = state.reservas.concat(item);
            return {
              ...state,
              reservas: updated,
            }
          }
          return {
            ...state,
            reservas: updated,
          };

    case DELETE_TURNO:
      const cleanCart = state.items.filter(item => item.id !== action.itemID);
      return {
        ...state,
        items: cleanCart,
        total: sumTotal(cleanCart),
      };
    default:
      return state;
  }
}

export default ConfirmacionReducer;