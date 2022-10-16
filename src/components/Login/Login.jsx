import styles from './Login.module.css'
import LoginReduxForm from './LoginForm';
import { connect } from 'react-redux';
import { loginThunk } from './../../redux/auth-reducer';
import { Navigate } from 'react-router-dom';


const Login = (props) => {

    const onSubmit = (formData) => {
        props.loginThunk(formData.email, formData.password, formData.rememberMe);
    }
    
    if (props.isAuth) {
        return <Navigate replace to="/profile" />
    }

    return <div className={styles.LoginPage}>
        <h1 className={styles.Title}>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) => {
    
    return {
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps, {loginThunk})(Login);