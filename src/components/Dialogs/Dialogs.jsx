import css from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import Dialog from './Dialog/Dialog';

const DialogLink = (props) => {
    return (
        <li>
            <NavLink to={'/dialogs/'+props.id} className={css.chatItem}>{props.name}</NavLink>
        </li>
    )
}

const Dialogs = (props) => {
    
    let dialogElements = props.profilePage.dialogsData.map( dialog => <DialogLink name={dialog.name} id={dialog.id} key={dialog.id}/>);

    return (
        <div className={css.dialog}>
            <ul className={css.chatList}>
                {dialogElements}
            </ul>
            <div className={css.dialogWindow}>
                <Dialog 
                    profilePage={props.profilePage}
                    dispatch={props.dispatch}
                    profile={props.profile}
                />
            </div>
        </div>
    )
};

export default Dialogs;