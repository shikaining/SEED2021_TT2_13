import React, { useState } from 'react';

const Login = () => {
    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const { username, password } = user;

    const onChange = e => setUser({...user, [e.target.name] : e.target.value});

    const onSubmit = e => {
        e.preventDefault();
        console.log('Login')
    }

    return (
        <div className='form-container'>
            <h1>
                Log In
            </h1>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label htmlFor='username'>Username</label>
                    <input type='text' name='username' value={username} onChange={onChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input type='text' name='password' value={password} onChange={onChange} />
                </div>
                <input type='submit' value='Login' className='btn btn-primary btn-block' />
            </form>
        </div>
    );
};

export default Login;
