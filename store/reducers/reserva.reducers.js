// // import { ADD_ITEM, DELETE_ITEM, CONFIRM_CART } from "../actions/cart.action";
// import { ADD_RESERVA,DELETE_RESERVA } from "../actions/reserva.actions";

// const INITIAL_STATE = {
//   ReservaLista: [],
//   total: 0,
//   confirm: false,
// };

// const sumTotal = list => list
//   .map(item => item.quantity * item.price)
//   .reduce((a, b) => a + b, 0)

// const ReservaReducer = (state = INITIAL_STATE, action) => {
//   switch(action.type) {
//     case ADD_RESERVA:
//       const indexItem = state.ReservaLista.findIndex(item => item.id === action.item.id);

//       if (indexItem === -1) {
//         const item = { ...action.item, quantity: 1 };
//         const updated = state.ReservaLista.concat(item);
//         return {
//           ...state,
//           ReservaLista: updated,
//           total: sumTotal(updated),
//         }
//       }

//       const updated = state.ReservaLista.map(item => {
//         if (item.id === action.item.id) item.quantity++;
//         return item;
//       })

//       return {
//         ...state,
//         ReservaLista: updated,
//         total: sumTotal(updated),
//       };
//     case DELETE_RESERVA:
//       const cleanCart = state.ReservaLista.filter(item => item.id !== action.itemID);
//       return {
//         ...state,
//         ReservaLista: cleanCart,
//         total: sumTotal(cleanCart),
//       };
//     default:
//       return state;
//   }
// }

// export default ReservaReducer;