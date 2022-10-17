import FirstPofileImg from '../../images/first_image.jpg';
import classes from './Profile.module.css';
import ProfileData from './../ProfileData/ProfileData';
import MyPostsContainer from './../MyPosts/MyPostsContainer';
//import ProfileStatus from './ProfileStatus';
import ProfileStatusHooks from './ProfileStatusHooks';


const Profile = (props) => {
    return (
        <div className={classes.Content}>
            <img src={FirstPofileImg} alt="first profile" className={classes.img} />
            <ProfileData profile={props.profile} 
            isOwner={props.isOwner}
            savePhoto={props.savePhoto}
            />
            {/*<ProfileStatus status={props.status} updateStatus={props.updateStatus} />*/}
            <ProfileStatusHooks status={props.status} updateStatus={props.updateStatus} />
            <div className="">
                <MyPostsContainer />
            </div>
        </div>
    )
}

export default Profile;