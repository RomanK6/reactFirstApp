import Post from '../Post/Post';
import classes from './MyPosts.module.css';
import NewpostContainer from './Newpost/NewpostContainer';

const MyPosts = (props) => {
    
    let postList = props.postsPage.postsData.map( post => <Post mesage={post.post} likes={post.likes} id={post.id} key={post.id}/> )

    return (
        <div>
            <h2 className={classes.title}>My posts</h2>
            <div className={classes.item}>
                <NewpostContainer
                    //postsPage={props.postsPage}
                    //dispatch={props.dispatch} 
                />
            </div>
            {postList}
        </div>
    )
}

export default MyPosts;