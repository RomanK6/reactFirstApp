//import { addMessageActionCreator, updateNewMesageTextActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    
    return {
        profilePage: state.profilePage,
    }
}

let mapDispatchToProps = (dispatch) => {
    
    return {}
}

/* // --Вызов кода без compose
let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;
*/
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs);