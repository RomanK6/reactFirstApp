import axios from 'axios';
import stules from './Users.module.css';
import avatar from '../../images/i.jpg';

const Users = (props) => {

    let getUsers =() => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items);
            });
            /*
            props.setUsers([
                {id: 0, followed: false, firstName: 'Вася', sekondName: 'Пупкин', location: {contry: 'Russia', sity: 'Krasnodar'}, status: 'Hi awerione! I`m here now =)', avatar: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-90.jpg'},
                {id: 1, followed: true, firstName: 'Абрвалг', sekondName: 'Пупкин', location: {contry: 'Russia', sity: 'Ekaterinburg'}, status: 'Hi awerione! I`m here now =)', avatar: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-90.jpg'},
                {id: 2, followed: false, firstName: 'Абоба', sekondName: 'Uilis', location: {contry: 'USA', sity: 'Washington'}, status: 'Hi awerione! I`m here now =)', avatar: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-90.jpg'},
            ])*/
        }
    }


    

    return (
        <div className={stules.Users}>
            <button onClick={getUsers}>Get users</button>
            <h2 className={stules.Title}>Users</h2>
            {
                props.users.map(user => 
                <div key={user.id} className={stules.User}>
                    <div className={stules.Icon}>
                        <img src={user.photos.small != null ? user.photos.small : avatar/*user.avatar*/} alt="avatar" />
                        {user.followed ?
                         <button className={stules.Button} onClick={() => { props.unfollow(user.id) }}>follow</button> : 
                         <button className={stules.Button} onClick={() => { props.follow(user.id) }}>unfollow</button>}
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
            <button className={stules.showMore}>Show more</button>
        </div>
    )
}

export default Users;