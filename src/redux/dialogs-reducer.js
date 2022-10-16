
//const ADD_MESSAGE = 'ADD-MESSAGE'
//const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE_TEXT = 'SEND_MESSAGE_TEXT'

let initialState = {
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
    //newMessageText: '',
    //placeholterText: 'Написать сообщение...',

}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        /*
        case ADD_MESSAGE:
            /*
            let id = state.messagesData.length
            let newMessage = {
                id: id,
                message: state.newMessageText,
                user: 'Вася',
            };
                
            let add = () => {
                stateCopy.messagesData.push(newMessage);
                stateCopy.placeholterText = 'Написать сообщение...';
            };
            
            newMessage.message.length > 0 ? add() : stateCopy.placeholterText = 'Сообщение должно содержать больше 0 символов';
                
            stateCopy.newMessageText = '';
            return stateCopy;
            */
           /*
            let add = () => {
                return {
                    ...state,
                    newMessageText: '',
                    placeholterText: 'Написать сообщение...',
                    messagesData: [...state.messagesData, {id: state.messagesData.length, message: state.newMessageText, user: 'Вася',}]
                }
            }
            let noAdd = () => {
                return {
                    ...state,
                    placeholterText: 'Сообщение должно содержать больше 0 символов'
                }
            }
            return state.newMessageText.length > 0 ? add() : noAdd();
            */
            /*
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.text
            }
            */
        case SEND_MESSAGE_TEXT:
            let body = action.text
            return {
                ...state,
                messagesData: [...state.messagesData, {id: state.messagesData.length, message: body, user: 'Вася',}],
                dialogKey: 0,
            }
            /*
            let body = action.text
            let add = () => {
                return {
                    ...state,
                    messagesData: [...state.messagesData, {id: state.messagesData.length, message: body, user: 'Вася',}],
                    dialogKey: 0,
                    placeholterText: 'Написать сообщение...',
                }
            }
            let noAdd = () => {
                return {
                    ...state,
                    placeholterText: 'Сообщение должно содержать больше 0 символов'
                }
            }
            return body ? add() : noAdd();
            */
        default:
            return state;
    }
    
}

export default dialogsReducer;

export const sendMessage = (text) => {
    return {
        text: text, 
        type: SEND_MESSAGE_TEXT
    }
}
/*
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMesageTextActionCreator = (text) => {
    return {
        text: text, 
        type: UPDATE_NEW_MESSAGE_TEXT
    }
}
*/