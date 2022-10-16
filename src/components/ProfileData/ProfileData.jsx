import css from './ProfileData.module.css';
import avatar from '../../images/i.jpg'
import Preloader from '../common/Preloader/Preloader';

const ProfileData = (props) => {
    
    if (!props.profile) {
        return <Preloader />
    } else {
        return (
            <div className={css.item}>
                <img src={props.profile.photos.small === null ? avatar : props.profile.photos.small} alt="avatar" />
                <div className={css.userNickname}>{props.profile.fullName}</div>
                <ul className="Data">
                    <li>
                        {props.profile.aboutMe}
                    </li>
                    <li>
                        {props.profile.lookingForAJobDescription}
                    </li>
                    <li>
                        {props.profile.contacts.facebook}
                    </li>
                    <li>
                        {props.profile.contacts.website}
                    </li>
                    <li>
                        {props.profile.contacts.vk}
                    </li>
                    <li>
                        {props.profile.contacts.twitter}
                    </li>
                    <li>
                        {props.profile.contacts.instagram}
                    </li>
                    <li>
                        {props.profile.contacts.youtube}
                    </li>
                    <li>
                        {props.profile.contacts.github}
                    </li>
                    <li>
                        {props.profile.contacts.mainLink}
                    </li>
                </ul>
            </div>
        )
    }

    

}

export default ProfileData;