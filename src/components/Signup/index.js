import React, {useState} from 'react';
import {NavLink, useHistory} from 'react-router-dom'

import Input from '../TextInput/index';
import Button from '../Button/index'

import {auth, firestore, provider} from '../../config/firebase'



const Index = () => {

const [fullname, setFullName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [errorEmail, setErrorEmail] = useState('');
const [errorPassword, setErrorPassword] = useState('');
const [errorMessage, setErrorMessage] = useState('');
const history = useHistory();


        const handleChange = (e) => {
            const {name, value} = e.currentTarget;
            console.log(name, value)
            if (name === 'fullname'){
            setFullName(value)
            }else if (name === 'email'){
                setEmail(value)
            }else if (name === 'password'){
                setPassword(value)
            }
        }


        const handleKeyUp = () =>{
            setErrorMessage ('');
        }


        const handleSubmit = async (e) =>{
            e.preventDefault();

            try {
                if (!fullname || !email || !password){
                setErrorMessage ('All fields are required')
            } 
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            
            if (user){
                const profile =firestore.collection('users').doc(user.uid);
                await profile.set ({
                    fullname,
                    email
                })
                localStorage.setItem('uid', user.uid);
                history.push('/login')
            }
            }catch (error) {
                if (error.code === 'auth/weak-password'){
                    setErrorPassword(error.message)
                }else if (error.code === 'auth/email-already-in-use'){
                    setErrorEmail(error.message)
                }else if (error.code === 'auth/invalid-email'){
                    setErrorEmail(error.message)
                }


            //   console.log(error.code)
            //   console.log(error.message)  
            }
        }


        const handleGoogle = async (e) => {
            e.preventDefault();
            const {user} = await auth.signInWithPopup(provider);

            console.log (user);

            if (user){
                const profile =firestore.collection('users').doc(user.uid);
                await profile.set ({
                    fullname: user.displayName,
                    email: user.email
                })
                localStorage.setItem('uid', user.uid);
                history.push('/login')
            }
        }
        


    return (
        <div>

            <form onSubmit={handleSubmit}>
                <div className="signup">
                    <NavLink to ="/" className="signup-title">TutChit</NavLink>
                    {errorMessage ? <p className="errormsg">{errorMessage}</p> : ''}
                    <Input
                     placeholder="Enter FullName"
                     type="text" 
                     label = "Fullname"
                     name="fullname"
                     value={fullname}
                     handleChange={handleChange}
                     handleKeyUp={handleKeyUp}
                    />
                    <Input
                     placeholder="Enter Email Address"
                     type="email" 
                     label = "Email"
                     name="email"
                     value={email}
                     handleChange={handleChange}
                     handleKeyUp={handleKeyUp}
                     error={errorEmail}
                   />
                    <Input
                     placeholder="Enter Password"
                     type="password" 
                     label = "Password"
                     name="password"
                     value={password}
                     handleChange={handleChange}
                     handleKeyUp={handleKeyUp}
                     error={errorPassword}
                    />
                    <Button title="Signup" className="buttonsignup blue" />
                 
                    <Button title="Google" className="buttonsignup blue" handleClick={handleGoogle} />
                
                    <p className="center-align">Already have an account? <a href = "/login">Log in</a></p>
                    
                </div>
            </form>

        </div>
    )
}

export default Index;