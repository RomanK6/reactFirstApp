import {connect} from 'react-redux';
import Profile from './Profile';
import React from 'react';
import { getOnUserProfileThink, getStatusThink, updateStatusThink } from '../../redux/profile-reducer';
import { compose } from 'redux';
//import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { withRouter } from '../common/withRouter/withRouter';
import {Navigate} from "react-router-dom";


class ProfileContainer extends React.Component {


    componentDidMount () {
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = this.props.myId
        }
        this.props.getOnUserProfileThink(userId);
        this.props.getStatusThink(userId);
    }

    render () {
        if (!this.props.isAuth && !this.props.router.params.userId) {
            return <Navigate to={'/login'} />
        }
        return <Profile {...this.props} 
            profile={this.props.profile} 
            status={this.props.status} 
            updateStatus={this.props.updateStatusThink} />
    }
}

let mapStateToProps = (state) => ({
    profile: state.postsPage.profile,
    status: state.postsPage.status,
    myId: state.auth.userId,
    isAuth: state.auth.isAuth,
})

/*  --Вызов кода без compose
let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

export default connect(mapStateToProps, {getOnUserProfileThink})(withRouter(AuthRedirectComponent));
*/

export default compose(
    connect(mapStateToProps, {getOnUserProfileThink, getStatusThink, updateStatusThink}),
    withRouter,
    //withAuthRedirect,
)(ProfileContainer);
