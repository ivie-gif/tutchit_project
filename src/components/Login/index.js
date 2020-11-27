import React, {useState} from 'react';
import {NavLink, useHistory} from 'react-router-dom';

import Input from '../TextInput/index';
import Button from '../Button/index'

import {auth} from '../../config/firebase'


const Index = () => {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [errorEmail, setErrorEmail] = useState('');
const [errorMessage, setErrorMessage] = useState('');
const history = useHistory();


const handleChange = (e) => {
    const {name, value} = e.currentTarget;
    if (name === 'email'){
        setEmail (value)
    }else if (name === 'password'){
        setPassword(value)
    }
}


const handleKeyUp = (e) => {
    setErrorMessage('');
}


const handleSubmit = async (e) => {
    e.preventDefault();

    try {

        if (!email || !password){
            setErrorMessage ('All fields are required')
        }
        const {user} = await auth.signInWithEmailAndPassword (email, password)
        console.log (user)

        
        localStorage.setItem('uid', user.uid);
        history.push('/dashboard')

    } catch (error) {
        if (error.code === 'auth/user-not-found'){
            setErrorMessage('Invalid email or password')
        }else if (error.code === 'auth/wrong-password'){
            setErrorMessage("Invalid email or password")
        }

    }
}



    return (
        <div>

        <form onSubmit={handleSubmit}>
            <div className="login">
            <NavLink to="/" className="login-title">TutChit</NavLink>
            {errorMessage ? <p className="errormsg">{errorMessage}</p> : ''}
            <Input
                placeholder="Enter Email"
                type="email"
                label="Email Address"
                name="email"
                value={email}
                handleChange={handleChange}
                error={errorEmail}
                handleKeyUp={handleKeyUp}
            />
            <Input
                     placeholder="Enter Password"
                     type="password" 
                     label = "Password"
                     name="password"
                     value={password}
                     handleChange={handleChange}
                     handleKeyUp={handleKeyUp}
                    />

            <Button title="Login" className="buttonlogin blue" />
            <p className="center-align ">Don't have an account? <a href="/signup" >Signup</a></p>
        </div>
        </form>

        </div>
    )
}

export default Index;