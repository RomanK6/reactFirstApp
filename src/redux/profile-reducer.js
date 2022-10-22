import { getOnUserProfile, getStatus, updateStatus, savePhotoAPI, saveProfileAPI } from '../api/api';
import { stopSubmit } from 'redux-form';

const ADD_POST = 'ADD-POST';
//const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';


let initialState = {
    postsData : [
        {id: 0, post: 'My first post!', likes: 44},
        {id: 1, post: 'Second post', likes: 15},
        {id: 2, post: 'Lorem ipsum', likes: 24},
    ],
    //newPostText: '',
    //placeholterText: 'Введите текст...',
    profile: null,
    status: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.postsData.length,
                post: action.newPostText,
                likes: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                //placeholterText: 'Введите текст...',
            }
            /*
            let newPost = {
                id: state.postsData.length,
                post: action.newPostText,
                likes: 0
            };
            let add = () =>  {
                return {
                    ...state,
                    postsData: [...state.postsData, newPost],
                    //newPostText: '',
                    placeholterText: 'Введите текст...',
                }
            };
            let noAdd = () => {
                return {
                    ...state,
                    placeholterText: 'Публикация должна содержать больше 0 символов',
                }
            };
            return newPost.post ? add() : noAdd();*/
        /*
        case UPDATE_NEW_POST_TEXT:
                let stateCopy = {...state};
                stateCopy.newPostText = action.text;
                return {
                    ...state,
                    newPostText: action.text,
                };*/
        case SET_USER_PROFILE: 
            return { ...state, profile: action.profile}
        case SET_STATUS: 
            return { ...state, status: action.status}
        case DELETE_POST: 
            return { ...state,  postsData: state.postsData.filter(p => p.id !== action.id)}
        case SAVE_PHOTO_SUCCESS:
            return { ...state, profile: { ...state.profile, photos: action.photos }}
        default:
            return state;
    }
    
}

export default profileReducer;

export const addPostActionCreator = (newPostText) => {
    return {
        type: ADD_POST, 
        newPostText,
    }
}
/*
export const updateNewPostTextActionCreator = (text) => {
    return {
        text: text, 
        type: UPDATE_NEW_POST_TEXT,
    }
}
*/
export const setUserProfile = (profile) => {
    return {
        profile,
        type: SET_USER_PROFILE,
    }
}


export const setStatus = (status) => ({status, type: SET_STATUS})

export const deletePost = (id) => {
    return {
        type: DELETE_POST, 
        id,
    }
}

export const setPhotoSuccess = (photos) => ({photos, type: SAVE_PHOTO_SUCCESS})

export const getOnUserProfileThink = (userId) => async (dispatch) => {
    let response = await getOnUserProfile(userId);
    dispatch(setUserProfile(response));
}

export const getStatusThink = (id) => async (dispatch) => {
    let response = await getStatus(id);
    dispatch(setStatus(response.data));
}

export const updateStatusThink = (status) => async (dispatch) => {
    let response = await  updateStatus(status);
    if (response.data.resultCode === 0){
        dispatch(setStatus(status));
    }
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await  savePhotoAPI(file);
    if (response.data.resultCode === 0){
        dispatch(setPhotoSuccess(response.data.data.photos));
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const id = getState().auth.userId;
    let response = await  saveProfileAPI(profile);
    if (response.data.resultCode === 0){
        dispatch(getOnUserProfileThink(id));
    } else {
        dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0])
    }
}