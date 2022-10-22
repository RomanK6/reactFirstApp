import css from './ProfileData.module.css';
import avatar from '../../images/i.jpg'
import Preloader from '../common/Preloader/Preloader';
import ProfileDataForm from './ProfileDataForm';
import { useState } from 'react';

const ProfileData = (props) => {

    let [editMode, setEditMode] = useState(false);

    let goToEditMode = () => {
        setEditMode(!editMode);
    }

    if (!props.profile) {
        return <Preloader />
    } else {
        const mainPhotoSelected = (e) => {
            if (e.target.files.length) {
                props.savePhoto(e.target.files[0])
            }
        }

        const onSubmit = async (formData) => {
            props.saveProfile(formData).then(
                () => {
                    setEditMode(false);
                }
            )
        }

        return (
            <div className={css.item}>
                <img src={props.profile.photos.small === null ? avatar : props.profile.photos.small} alt="avatar" />
                {props.isOwner && <input type={'file'} onChange={mainPhotoSelected} />}
                <div className={css.userNickname}>{props.profile.fullName}</div>
                {editMode 
                ? <ProfileDataForm initialValues={props.profile} onSubmit={onSubmit} /> 
                : <ProfileInfo profile={props.profile} isOwner={props.isOwner} goToEditMode={goToEditMode} />}
            </div>
        )
    }

    

}

const ProfileInfo = (props) => {
    return <>
        {props.isOwner &&
            <div>
            <button onClick={props.goToEditMode}>Edit</button>
        </div>}
        <ul className="Data">
            <li>
                {props.profile.aboutMe}
            </li>
            <li>
                looking for a job: {props.profile.lookingForAJob ? 'yes' : 'not'}
            </li>
            <li>
                professional skills: {props.profile.lookingForAJobDescription}
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
    </>
}

export default ProfileData;