import { getOnUserProfile, getStatus, updateStatus } from '../api/api';

const ADD_POST = 'ADD-POST';
//const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';


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

