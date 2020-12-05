import axios from 'axios'
import {GET_DATA} from './types'

export const getResults = (rollNumbers) => async dispatch =>{
    const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };



      const body = JSON.stringify({ rollNumbers });
   
      try {
        const res = await axios.post('/api/results', body, config)
        dispatch({
            type: GET_DATA,
            payload: res.data
        })

    } catch (err) {
        console.error(err.message)
    }
}