import { 
    //addMessageActionCreator, 
    //updateNewMesageTextActionCreator, 
    sendMessage } from '../../../../redux/dialogs-reducer';
import NewmessageForm from './Newmessage';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        /*
        updateNewMesageBody: (text) => {
            dispatch(updateNewMesageTextActionCreator(text));
        },
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        */
        onSubmit: (values) => {
            //alert(values.newMessageBody)
            //dispatch(updateNewMesageTextActionCreator(values.newMessageBody));
            //dispatch(addMessageActionCreator());
            dispatch(sendMessage(values.newMessageBody));
        }
    }
}

const NewmessageContainer = connect(mapStateToProps, mapDispatchToProps)(NewmessageForm);

export default NewmessageContainer;