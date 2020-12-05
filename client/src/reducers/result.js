import {GET_DATA} from '../actions/types'

const initialState = {
    results: []
}

export default function(state=initialState, action){
    const {payload, type} = action

    switch (type) {
        case GET_DATA:
            return{
                ...state,
                results: payload
            }
    
        default:
            return state
    }
}
