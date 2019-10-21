import { GET_UPDATE_FREQ } from './types'
import { Dispatch } from 'redux';


export const getUpdateFreq = () => (dispatch: Dispatch) => {
    fetch(`http://127.0.0.1:5000/updatefreq`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            dispatch({
                type: GET_UPDATE_FREQ,
                freq: data,
            })
        }
        )
}
