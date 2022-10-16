import { getUsers, unfollowOnUser, followOnUser } from './../api/api';
import { updateObjectInArray } from './../utils/objekts-helper';

const FOLLOW = 'FOLLOW';
const UNFOOLOW = 'UNFOOLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
    usersData : [
        /*
        {id: 0, followed: false, firstName: 'Вася', sekondName: 'Пупкин', location: {contry: 'Russia', sity: 'Krasnodar'}, status: 'Hi awerione! I`m here now =)', avatar: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-90.jpg'},
        {id: 1, followed: true, firstName: 'Абрвалг', sekondName: 'Пупкин', location: {contry: 'Russia', sity: 'Ekaterinburg'}, status: 'Hi awerione! I`m here now =)', avatar: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-90.jpg'},
        {id: 2, followed: false, firstName: 'Абоба', sekondName: 'Uilis', location: {contry: 'USA', sity: 'Washington'}, status: 'Hi awerione! I`m here now =)', avatar: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-90.jpg'},
        */
    ],
    pageSize: 6,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: updateObjectInArray(state.usersData, action.id, 'id', {followed: true}),
                /*
                usersData: state.usersData.map(user => {
                    //if (user.id === action.id) {
                    //    return { ...user, followed: true};
                    //}
                    //return user;
                    return (user.id === action.id ?{ ...user, followed: true} : user);
                } )*/
            }
            
        case UNFOOLOW:
            return {
                ...state,
                usersData: updateObjectInArray(state.usersData, action.id, 'id', {followed: false}),
                /*
                usersData: state.usersData.map(user => {
                    //if (user.id === action.id) {
                    //    return { ...user, followed: false};
                    //}
                    //return user;
                    return (user.id === action.id ?{ ...user, followed: false} : user);
                } )
                */
            }
        case SET_USERS:
            return { ...state, usersData: [/*...state.usersData,*/ ...action.users] }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.count}
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching}
            case TOGGLE_IS_FOLLOWING_PROGRESS:
            return { 
                ...state, 
                followingInProgress: action.isFetching 
                ? [ ...state.followingInProgress, action.userId] 
                : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
    
}

export const followSuccess = (id) => ({type: FOLLOW, id});
export const unfollowSuccess = (id) => ({type: UNFOOLOW, id});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type:SET_CURRENT_PAGE, currentPage: currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type:SET_TOTAL_USERS_COUNT, count: totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type:TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({type:TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));
        let data = await getUsers(currentPage, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
}}

const followUnfollowFlow = async (dispatch, id, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, id));
        let response = await apiMethod(id);
        if (response.resultCode === 0) {
            dispatch(actionCreator(id) )
        }
        dispatch(toggleFollowingProgress(false, id))
}

export const unfollow = (id) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, id, unfollowOnUser, unfollowSuccess);
}}
export const follow = (id) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, id, followOnUser, followSuccess);
}}

export default usersReducer;