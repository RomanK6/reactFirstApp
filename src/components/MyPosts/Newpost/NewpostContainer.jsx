import { 
    //updateNewPostTextActionCreator, 
    addPostActionCreator } from '../../../redux/profile-reducer';
import Newpost from './Newpost';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        postsPage: state.postsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        /*
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        },*/
        addPost: (newPostText)=> {
            dispatch(addPostActionCreator(newPostText));
        },
    }
}

const NewpostContainer = connect(mapStateToProps, mapDispatchToProps)(Newpost);

export default NewpostContainer;

