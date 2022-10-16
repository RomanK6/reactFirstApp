import css from './Friends.module.css';

const Friends = () => {
    return (
        <div className={css.friendlist}>
            Friends
            <ul>
                <li className={css.friendItem}>Абрвалг</li>
                <li className={css.friendItem}>Абрвалг</li>
                <li className={css.friendItem}>Абрвалг</li>
            </ul>
        </div>
    )
};

export default Friends;