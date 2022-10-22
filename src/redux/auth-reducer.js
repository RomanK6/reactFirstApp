import { stopSubmit } from 'redux-form';
import { getOnMe, logout } from '../api/api';
import { loginPost, securitiAPI } from './../api/api';

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'samurai-network/auth/GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
}

const authReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                //isAuth: action.data.isAuth, //isAuth: true
            }
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                captchaUrl: action.captchaUrl,
            }
        default:
            return state;
    }
}

export const setAuthUserData = ( userId, email, login, isAuth ) => ({ type: SET_USER_DATA, data: {userId, email, login, isAuth}})

export const getCaptchaUrlSuccess = (captchaUrl) => ({ type: GET_CAPTCHA_URL_SUCCESS, captchaUrl})
/*
export const getOnMeThunk = () => (dispatch) => {
    return getOnMe().then(data => {
        if (data.resultCode === 0) {
            let {email, id, login} = data.data
            dispatch(setAuthUserData(id, email, login, true));
        }
    });
}
*/
export const getOnMeThunk = () => async (dispatch) => {
    let response = await getOnMe();

    if (response.resultCode === 0) {
        let {email, id, login} = response.data
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const loginThunk = (email, password, rememberMe, captcha) => async (dispatch) => {    
    let response = await loginPost(email, password, rememberMe, captcha);
    
    if (response.resultCode === 0) {
        dispatch(getOnMeThunk())
        dispatch(getCaptchaUrlSuccess(null));
    } else {
        if (response.resultCode === 10) {
            dispatch(getCaptchaUrlThunk())
        }
        let message = response.messages.length > 0 ? response.messages[0] : 'Some error';
        dispatch(stopSubmit('login', {_error: message}));
    }
}

export const getCaptchaUrlThunk = () => async (dispatch) => { 
    let response = await securitiAPI.getCaptchaUrl();
    let captcha = response.data.url
    dispatch(getCaptchaUrlSuccess(captcha));
}

export const logoutThunk = () => async (dispatch) => {
    let response = await logout();
    if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    };
}

export default authReducer;