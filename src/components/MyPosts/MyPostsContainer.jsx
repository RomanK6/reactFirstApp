import { addPostActionCreator } from '../../redux/profile-reducer';
import {connect} from 'react-redux';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
    return {
        postsPage: state.postsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: ()=> {
            dispatch(addPostActionCreator());
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;