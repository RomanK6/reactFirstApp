import { createField, Input } from './../FormsControls/FormsControls';
import { reduxForm } from 'redux-form';


const ProfileDataForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <button>save</button>
        {!!props.error && <div>{props.error}</div>}
        <ul className="Data">
            <li>
                {createField('Full name', 'fullName', [], Input)}
            </li>
            <li>
                {createField('about me', 'aboutMe', [], Input)}
            </li>
            <li>
                looking for a job: {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
            </li>
            <li>
                {createField('professional skills', 'lookingForAJobDescription', [], Input)}
            </li>
            <li>
                {createField('facebook', 'contacts.facebook', [], Input)}
            </li>
            <li>
                {createField('website', 'contacts.website', [], Input)}
            </li>
            <li>
                {createField('vk', 'contacts.vk', [], Input)}
            </li>
            <li>
                {createField('twitter', 'contacts.twitter', [], Input)}
            </li>
            <li>
                {createField('instagram', 'contacts.instagram', [], Input)}
            </li>
            <li>
                {createField('youtube', 'contacts.youtube', [], Input)}
            </li>
            <li>
                {createField('github', 'contacts.github', [], Input)}
            </li>
            <li>
                {createField('mainLink', 'contacts.mainLink', [], Input)}
            </li>
        </ul>
    </form>
}

const ProfileDataFormRedux = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormRedux;