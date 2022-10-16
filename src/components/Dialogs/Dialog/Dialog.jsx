import NewmessageContainer from './Newmessage/NewmessageContainer';
import MessageContainer from '../../Message/MessageContainer';

const Dialog = (props) => {
    
    let messagesList = props.profilePage.messagesData.map( message => <MessageContainer
        id={message.id} 
        key={message.id} 
        name={message.user} 
        message={message.message} 
        profile={props.profile}
        />)
    
    return (
        <div>
            {messagesList}
            <NewmessageContainer
                profilePage={props.profilePage}
                dispatch={props.dispatch}
            />
        </div>
    )
}

export default Dialog;