import { SET_UPDATE_FREQ } from './types'
import { Dispatch } from 'redux';


export const setUpdateFreq = (freq: number) => (dispatch: Dispatch) => {
    const data = { "update_frequency": freq };

    fetch(`http://127.0.0.1:5000/updatefreq`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            dispatch({
                type: SET_UPDATE_FREQ,
                freq: data.freq,
            })
        }
        )
}
