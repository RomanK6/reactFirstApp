import styles from './FormsControls.module.css';
import {Field} from "redux-form";

const FormControl = ({input, meta, element, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
    <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
        {props.children}
        {hasError && <span>{meta.error}</span>}
    </div>)
}

export const Textarea = (props) => {
    const {input, meta, element, ...restProps} = props;
    return (
        <FormControl {...props}>
            <textarea {...input} {...restProps} />
        </FormControl>
    )
}

export const Input = (props) => {
    const {input, meta, element, ...restProps} = props;
    return (
        <FormControl {...props}>
            <input {...input} {...restProps} />
        </FormControl>
    )
}

export const createField = (placeholder, name, validators, component, props = {}, text = "") => {
    return (
    <div>
        <Field placeholder={placeholder} 
               name={name}
               validate={validators}
               component={component}
               {...props}
        /> {text}
    </div>
)}