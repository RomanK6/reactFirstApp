import stules from './Users.module.css';
import avatar from '../../images/i.jpg';
import React from 'react';
import { NavLink } from 'react-router-dom';


let User = ({user, followingInProgress, unfollow, follow}) => {

    return (
        <div key={user.id} className={stules.User}>
            <div>
                <NavLink to={`/profile/${user.id}`}>
                    <img className={stules.Icon} src={user.photos.small != null ? user.photos.small : avatar/*user.avatar*/} alt="avatar" />
                </NavLink>
                {user.followed ?
                 <button disabled={followingInProgress.some(id => id === user.id)} className={stules.Button} onClick={
                    () => {
                        unfollow(user.id);
                    }
                }>unfollow</button> : 
                 <button disabled={followingInProgress.some(id => id === user.id)} className={stules.Button} onClick={
                    () => { 
                        follow(user.id);
                    }
                }>follow</button>}
            </div>
            <div className={stules.Info}>
                {user.name + ' '}{/*user.firstName + ' '*/}
                {/*user.sekondName.slice(0, 1) + ' '*/}
                <br />
                {/*user.location.contry + ' '*/}
                {/*user.location.sity + ' '*/}
                <br />
                {/*user.status + ' '*/}
            </div>
        </div>
    )
}

export default User;