import { CanchasDeFutbol } from "../../data/cancha-data"
import { SELECT_CANCHA } from "../action/action-cancha"

const INITIAL_STATE={
    numero: CanchasDeFutbol,
    canchaSeleccionada: null
}

const CanchaReducer = (state=INITIAL_STATE, action) => { 
    switch(action.type){
        case SELECT_CANCHA:
            const CanchaIndex= state.numero.findIndex(num=>num.id===action.canchaID)
            if(CanchaIndex===-1) return{...state}
            return{
                ...state,
                canchaSeleccionada: state.numero[CanchaIndex]
            }
            default:
                return{...state}
    }
}

export default CanchaReducer