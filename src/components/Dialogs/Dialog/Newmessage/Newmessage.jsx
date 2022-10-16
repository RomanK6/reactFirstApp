import styles from './Newmessage.module.css';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from './../../../FormsControls/FormsControls';
import { maxLengthCreator, required } from './../../../../utils/validators/validators';

const maxLength12 = maxLengthCreator(12);

let Newmessage = (props) => {
    
    //let placeholder = props.profilePage.placeholterText;
    /*
    let textNewMessage = React.createRef();
    
    let addMessage = () => {
        props.addMessage()
    }

    let textNewMessageChange = () => {
        let text = textNewMessage.current.value;
        props.updateNewMesageBody(text)
    }
    */

    return (
        <form className={styles.newMessage} onSubmit={props.handleSubmit} >
            <Field component={Textarea} 
                validate = {[required, maxLength12]}
                name='newMessageBody' 
                placeholder={'Написать сообщение...'} />
            {/*
            <input 
                onChange={textNewMessageChange} 
                className={styles.textArea} 
                type="text" 
                placeholder={placeholder} 
                ref={textNewMessage}
                value={props.profilePage.newMessageText}
            />
            */}
            <button 
                //onClick={addMessage}
                className={styles.button} >
                Отправить
            </button>
        </form>
    )
}

const NewmessageForm = reduxForm({form: 'addMessageForm'})(Newmessage);

export default NewmessageForm;