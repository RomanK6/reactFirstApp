import stules from './Users.module.css';
import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';


let UsersC = ({totalItemsCount, pageSize, onChanget, currentPage, ...props}) => {
    /*
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }*/
    
    return (
        <div className={stules.Users}>
            <h2 className={stules.Title}>Users</h2>
            <Paginator 
                totalItemsCount={totalItemsCount}
                pageSize={pageSize}
                onChanget={onChanget}
                currentPage={currentPage}
            />
            {/*<div className={stules.PaginationWrapper}>
                {pages.map(bullet => 
                <span 
                    onClick={(e) => {props.onChanget(bullet)}}
                    key={bullet} 
                    className={stules.Pagination + ' ' + (props.currentPage === bullet ? stules.selectedPage : '')}>
                    {bullet}
                </span>)}
                </div>*/
            }
            
            {props.users.map(user => <User 
                user={user} 
                followingInProgress={props.followingInProgress} 
                unfollow={props.unfollow} 
                follow={props.follow} 
                key={user.id} />)}
            {
            //    props.users.map(user => 
            //    <div key={user.id} className={stules.User}>
            //        <div>
            //            <NavLink to={`/profile/${user.id}`}>
            //                <img className={stules.Icon} src={user.photos.small != null ? user.photos.small : avatar/*user.avatar*/} alt="avatar" />
            //            </NavLink>
            //            {user.followed ?
            //             <button disabled={props.followingInProgress.some(id => id === user.id)} className={stules.Button} onClick={
            //                () => {
            //                    props.unfollow(user.id);
            //                }
            //            }>unfollow</button> : 
            //             <button disabled={props.followingInProgress.some(id => id === user.id)} className={stules.Button} onClick={
            //                () => { 
            //                    props.follow(user.id);
            //                }
            //            }>follow</button>}
            //        </div>
            //        <div className={stules.Info}>
            //            {user.name + ' '}{/*user.firstName + ' '*/}
            //            {/*user.sekondName.slice(0, 1) + ' '*/}
            //            <br />
            //            {/*user.location.contry + ' '*/}
            //            {/*user.location.sity + ' '*/}
            //            <br />
            //            {/*user.status + ' '*/}
            //        </div>
            //    </div>
            //    )
        }
            <button className={stules.showMore}>Show more</button>
        </div>
    )
}

export default UsersC;