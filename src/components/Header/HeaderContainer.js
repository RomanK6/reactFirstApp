import Header from './Header';
import React from 'react';
import { connect } from 'react-redux';
import { 
    //getOnMeThunk, 
    logoutThunk } from './../../redux/auth-reducer';

class HeaderContainer extends React.Component {
    /*
    componentDidMount () {
        this.props.getOnMeThunk()
    }*/
    render() {
        return <Header {...this.props}/>
    }
}

let mapSrateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export default connect(mapSrateToProps, {
    //getOnMeThunk, 
    logout: logoutThunk})(HeaderContainer);