import { URL_API } from "../../constants/DataBase";

export const ADD_TURNO = 'ADD_TURNO';
export const ADD_RESERVA = 'ADD_RESERVA';
export const DELETE_TURNO = 'DELETE_TURNO';
export const CONFIRM_TURNO = 'CONFIRM_TURNO';

export const addTurno = item => ({
  type: ADD_TURNO,
  item,
});

export const addReserva = itemR => ({
  type: ADD_RESERVA,
  itemR,
});

export const deleteTurno = itemID => ({
  type: DELETE_TURNO,
  itemID,
});

export const confirmTurno = (payload, user) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_API}/ordenes.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date: Date.now(),
          items: { ...payload },
          user,
        })
      })
      console.log(response)
      dispatch({
        type: CONFIRM_TURNO,
        confirm: true,
      });
    } catch {
      console.log(error.message);
    }
  }
}