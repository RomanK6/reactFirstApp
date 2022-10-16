import { Field, reduxForm } from 'redux-form';
import { Input } from '../FormsControls/FormsControls';
import styles from './LoginForm.module.css';
import { required } from './../../utils/validators/validators';


const LoginForm = ({handleSubmit, error}) => {
    return <form onSubmit={handleSubmit} className="Form">
        <div className={styles.login_wrapper}>
            <Field placeholder={'Email'} 
                validate={[required]}
                name={'email'} component={Input} />
        </div>
        <div className={styles.password_wrapper}>
            <Field placeholder={'Password'} 
                validate={[required]}
                name={'password'} component={Input}
                type={'password'} />
        </div>
        <div className={styles.checkbox_wrapper}>
            <Field type={'Checkbox'} name={'rememberMe'} component={Input} /> remember me
        </div>
        {error && <div className={styles.formSummaryError}>
            {error}
        </div>}
        <div className={styles.login_wrapper}>
            <button>
                Login
            </button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({
    form: 'login',
})(LoginForm)

export default LoginReduxForm;

