import { HorariosFutbol } from "../../data/turn-data"

const INITIAL_STATE={
    hora: HorariosFutbol,
    horarioSeleccionado: null
}

const TurnReducer = (state=INITIAL_STATE, action) => {
    return {...state}
}

export default TurnReducer