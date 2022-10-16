import React from 'react';
import { connect } from 'react-redux';
import { setAuthUserData } from './../../redux/auth-reducer';
import { getOnMe } from './../../api/api';
import Message from './Message';

class MessageContainer extends React.Component {
    componentDidMount () {
        
        getOnMe().then(data => {
            if (data.resultCode === 0) {
                let {email, id, login} = data.data;
                this.props.setAuthUserData(id, email, login, this.props.isAuth);
                
            }
        });
    }
    render() {
        return <Message {...this.props}/>
    }
}

let mapSrateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export default connect(mapSrateToProps, {setAuthUserData})(MessageContainer);