import { HorariosFutbol } from "../../data/turn-data"
import { SELECT_TURN } from "../action/actions-horario"

const INITIAL_STATE={
    hora: HorariosFutbol,
    horarioSeleccionado: null
}

const TurnReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case SELECT_TURN:
            const TurnIndex= state.hora.findIndex(num=>num.turn===action.horarioID)
            if(TurnIndex===-1) return{...state}
            return{
                ...state,
                horarioSeleccionado: state.hora[TurnIndex]
            }
            default:
                return{...state}
    }}

export default TurnReducer