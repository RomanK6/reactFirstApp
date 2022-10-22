import { stopSubmit } from 'redux-form';
import { loginPost } from '../api/api';
import { getOnMeThunk } from './auth-reducer';

const INITIALIZED_SUCCEES = 'samurai-network/app/INITIALIZED_SUCCEES';

let initialState = {
    initialized: false,
}

const appReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case INITIALIZED_SUCCEES:
            return {
                ...state,
                initialized: true,
            }
            default:
                return state;
    }
}

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCEES});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getOnMeThunk());
    Promise.all([promise]).then(
        () => {
            dispatch(initializedSuccess());
        }
    )
}

export const loginThunk = (email, password, rememberMe) => (dispatch) => {    
    loginPost(email, password, rememberMe).then(data => {
        if (data.resultCode === 0) {
            dispatch(getOnMeThunk())
        } else {
            let message = data.messages.length > 0 ? data.messages[0] : 'Some error';
            dispatch(stopSubmit('login', {_error: message}));
        }
    });
}
/*
export const logoutThunk = () => (dispatch) => {
    logout().then(data => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    });
}
*/
export default appReducer;