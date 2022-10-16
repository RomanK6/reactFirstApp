import css from './Message.module.css';
import avatar from '../../images/i.jpg';

const Message = (props) => {
    
    return (
        <div className={css.message}>
            <div className={css.User}>
                <img src={avatar} alt="avatar" />
                {props.name}
            </div>
            <div className={css.userMessage}>
                {props.message}
            </div>
        </div>
    )
}

export default Message;