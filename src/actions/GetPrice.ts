import { GET_PRICE } from './types.js'
import io from 'socket.io-client';
import { Dispatch } from 'redux';

export const getPrice = () => (dispatch: Dispatch) => {
    const socket = io('http://127.0.0.1:5000');
    socket.on('update', (data: any) => {
        dispatch({
            type: GET_PRICE,
            data: data.data,
        })
    });

}
