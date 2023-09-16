import { createContext, useReducer } from "react";

export const WorkoutsContext = createContext()

export const workoutsReducer = (state, action) => {
    switch (action.type){
        case 'SET_WORKOUTS':
            return{
                workouts: action.payload
            }
        case 'CREATE_WORKOUT'
            return {
                workouts: [action.payload, ...state.workouts]
            }

    }
}

export const WorkoutsContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(workoutsReducer, {
        workouts: null
    })

    dispatch({type: 'SET_WORKOUTS', payload: [{}, {}]})

    return (
        <WorkoutsContext.Provider>
            { children }
        </WorkoutsContext.Provider>
    )
}