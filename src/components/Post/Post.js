import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <div className={classes.mesage}>
                {props.mesage}
            </div>
            <div className={classes.likes}>
                {props.likes}
            </div>
        </div>
    )
}

export default Post