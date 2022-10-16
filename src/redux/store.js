import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
    _state: {
        profilePage: {
            messagesData: [
                {id: 0, message: 'Hello World!!', user: 'Вася', dialogKey: 0},
                {id: 1, message: 'Hello react!!!', user: 'Петя', dialogKey: 0},
                {id: 2, message: 'Hello all!', user: 'Вася', dialogKey: 0},
                {id: 3, message: 'Good day every one =)', user: 'Вася', dialogKey: 0},
            ],
            dialogsData: [
                {id: 0, name: 'Вася'},
                {id: 1, name: 'Петя'},
                {id: 2, name: 'Аня'},
                {id: 3, name: 'Юля'},
            ],
            newMessageText: '',
            placeholterText: 'Написать сообщение...',
            sidebar: {},
        },
        postsPage: {
            postsData : [
                {id: 0, post: 'My first post!', likes: 44},
                {id: 1, post: 'Second post', likes: 15},
                {id: 2, post: 'Lorem ipsum', likes: 24},
            ],
            newPostText: '',
            placeholterText: 'Введите текст...',
        },
    },
    _callSubscriber() {},
    
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.postsPage = profileReducer(this._state.postsPage, action)
        this._state.profilePage = dialogsReducer(this._state.profilePage, action)
        this._state.profilePage.sidebar = sidebarReducer(this._state.profilePage.sidebar, action)
        
        this._callSubscriber(this._state);
    },
}

export default store;