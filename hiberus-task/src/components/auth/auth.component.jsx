import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Navigate} from 'react-router-dom';

import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';

import {asyncLogin, asyncRegister} from '../../actions/auth';

import './style.css'
import {useLocation, useNavigate} from 'react-router';

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};


const Login = () => {
    const form = useRef();

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loading, setLoading] = useState(false);
    let [authMode, setAuthMode] = React.useState('signin')

    const [successful, setSuccessful] = useState(false);

    const {isLoggedIn} = useSelector(state => state.auth);
    const {message} = useSelector(state => state.message);

    const navigate = useNavigate()

    const dispatch = useDispatch();

    const onChangeName = (e) => {
        const name = e.target.value;
        setName(name);
    };

    const onChangeSurname = (e) => {
        const surname = e.target.value;
        setSurname(surname);
    };

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        setLoading(true);

        form.current.validateAll();

        // if (checkBtn.current.context._errors.length === 0) {
        dispatch(asyncLogin(email, password))
            .then(() => {
                // navigate('/users');
            })
            .catch(() => {
                setLoading(false);
            });
        // } else {
        //     setLoading(false);
        // }
    };

    const handleRegister = (e) => {
        e.preventDefault();

        setSuccessful(false);

        // form.current.validateAll();

        // if (checkBtn.current.context._errors.length === 0) {

        dispatch(asyncRegister(name, surname, email, password))
            .then(() => {
                setSuccessful(true);
            })
            .catch((e) => {
                console.log(e)
                setSuccessful(false);
            });
        // }
    };

    const changeAuthMode = () => {
        setAuthMode(authMode === 'signin' ? 'signup' : 'signin')
    }

    const {pathname} = useLocation()

    console.log('---pathname', pathname)


    if (isLoggedIn) {
        return <Navigate to="/users"/>
    }

    if (pathname === '/log-in') {
        return (
            <div className="auth-form-container">
                <Form className="auth-form" onSubmit={handleLogin} ref={form}>
                    <div className="auth-form-content">
                        <h3 className="auth-form-title">Sign In</h3>
                        <div className="text-center">
                            Not registered yet?{' '}
                            <span className="link-primary" onClick={() => navigate('/sign-up')}>Sign Up</span>
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="email">Email address</label>
                            <Input
                                type="email"
                                className="form-control mt-1"
                                placeholder="Enter email"
                                name="email"
                                value={email}
                                onChange={onChangeEmail}
                                validations={[required]}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="password">Password</label>
                            <Input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter password"
                                name="password"
                                value={password}
                                onChange={onChangePassword}
                                validations={[required]}
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary" disabled={loading}>
                                {loading && (
                                    <span className="spinner-border spinner-border-sm"/>
                                )}
                                <span>Login</span>
                            </button>
                        </div>
                    </div>
                    {message && (
                        <div className="form-group">
                            <div className="alert alert-danger" role="alert">
                                {message}
                            </div>
                        </div>
                    )}
                </Form>
            </div>
        )
    }

    return (
        <div className="auth-form-container">
            <Form className="auth-form" onSubmit={handleRegister} ref={form}>
                <div className="auth-form-content">
                    <h3 className="auth-form-title">Sign Up</h3>
                    <div className="text-center">
                        Already registered?{' '}
                        <span className="link-primary" onClick={() => navigate('/log-in')}>
              Sign In
            </span>
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="name">Name</label>
                        <Input
                            type="name"
                            className="form-control mt-1"
                            placeholder="Enter email"
                            name="name"
                            value={name}
                            onChange={onChangeName}
                            validations={[required]}
                        />
                    </div>


                    <div className="form-group mt-3">
                        <label htmlFor="surname">Surname</label>
                        <Input
                            type="surname"
                            className="form-control mt-1"
                            placeholder="Enter surname"
                            name="surname"
                            value={surname}
                            onChange={onChangeSurname}
                            validations={[required]}
                        />
                    </div>


                    <div className="form-group mt-3">
                        <label htmlFor="email">Surname</label>
                        <Input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Enter email"
                            name="email"
                            value={email}
                            onChange={onChangeEmail}
                            validations={[required]}
                        />
                    </div>


                    <div className="form-group mt-3">
                        <label htmlFor="password">Surname</label>
                        <Input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                            name="password"
                            value={password}
                            onChange={onChangePassword}
                            validations={[required]}
                        />
                    </div>


                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary" disabled={loading}>
                            {loading && (
                                <span className="spinner-border spinner-border-sm"/>
                            )}
                            <span>Login</span>
                        </button>
                    </div>
                </div>
                {message && (
                    <div className="form-group">
                        <div className="alert alert-danger" role="alert">
                            {message}
                        </div>
                    </div>
                )}
            </Form>
        </div>
    )

}

export default Login;


// import React from 'react';
//
// function Login(props) {
//     return (
//         <div>Login</div>
//     );
// }
//
// export default Login;
