import { 
    getUsersThunkCreator,
    follow,
    unfollow,
} from '../../redux/users-reducer';
import {connect} from 'react-redux';
//import Users from './Users';//для Функциональной компонены
import React from 'react';
import UsersC from './UsersC';
import Preloader from '../common//Preloader/Preloader';
//import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { 
    //getUsers,
    getPageSize,
    getTotalUsersCoun,
    getCurrentPage,
    getIsFetching,
    getFollowingInProgress,
    getUsersSuperSelector,
 } from './../../redux/users-selectors';

class UsersContainer extends React.Component {

    componentDidMount () {
        
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
        
    }

    onChanget = (currentPage) => {
        this.props.getUsers(currentPage, this.props.pageSize);
    }

    render = () => {
        return <>
        {this.props.isFetching && <Preloader /> }
        <UsersC totalItemsCount = {this.props.totalItemsCount}
                pageSize = {this.props.pageSize}
                onChanget = {this.onChanget}
                currentPage = {this.props.currentPage}
                users = {this.props.users}
                unfollow = {this.props.unfollow}
                follow = {this.props.follow}
                toggleFollowingProgress = {this.props.toggleFollowingProgress}
                followingInProgress = {this.props.followingInProgress}
         />
         </>
    }
}


/*
let mapSrateToProps = (state) => {
    return {
        users: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}*/
let mapSrateToProps = (state) => {
    return {
        //users: getUsers(state),
        users: getUsersSuperSelector(state),
        pageSize: getPageSize(state),
        totalItemsCount: getTotalUsersCoun(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}






/*  --Вызов кода без compose
let AuthRedirectComponent = withAuthRedirect(UsersContainer);

export default connect(mapSrateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    getUsers: getUsersThunkCreator,
})(AuthRedirectComponent);
*/
export default compose(
    //withAuthRedirect,
    connect(mapSrateToProps, {
        follow,
        unfollow,
        //setCurrentPage,
        getUsers: getUsersThunkCreator,
    }),
    
)(UsersContainer)