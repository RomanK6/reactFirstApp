import React from 'react';
import classes from './Newpost.module.css';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from './../../../utils/validators/validators';
import { Textarea } from './../../FormsControls/FormsControls';


let Newpost = React.memo ( props => {
    
    //let placeholder = props.postsPage.placeholterText;

    
    //let newPostElement = React.createRef();
    //let onPostChange = () => {
    //    let text = newPostElement.current.value;
    //    props.updateNewPostText(text)
    //}
    

    let onAddPost = (values) => {
        props.addPost(values.newPostText)
    };

    return (
        <>
            <label className={classes.label}>New post</label>
            <AddNewPostForm onSubmit={onAddPost} placeholder='Введите текст...' />
        </>
        
    )
    
})


/*
class Newpost extends React.PureComponent {

    // если используем extends React.Component, то оптимизируем рендеры с помощью shouldComponentUpdate
    //shouldComponentUpdate (nextProps, nextState) {
    //    return (this.props.postsPage.postsData !== nextProps.postsPage.postsData || this.state !== nextState);
    //}
    

    render () {
        console.log('rend')
        
        let onAddPost = (values) => {
            this.props.addPost(values.newPostText)
        };

        return (
            <>
                <label className={classes.label}>New post</label>
                <AddNewPostForm onSubmit={onAddPost} placeholder='Введите текст...' />
            </>
        
        )
    }
    
}
*/
const maxLength10 = maxLengthCreator(10);

let AddNewpost = React.memo((props) => {
    return (
        <form className={classes.form} onSubmit={props.handleSubmit} >
            <Field component={Textarea} 
                name='newPostText' 
                placeholder={props.placeholder} 
                validate={[required, maxLength10]} />
            {/*
            <textarea 
                className={classes.input} 
                ref={newPostElement} 
                placeholder={placeholder} 
                onChange={onPostChange} 
                value={props.postsPage.newPostText}
            />*/}
            <button 
            //onClick={onAddPost} 
            type="submit" 
            className={classes.submit}>
                Add post
            </button>
        </form>
    )
})

let AddNewPostForm = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewpost);

export default Newpost;