import React, {useState} from 'react'

import Navbar from '../Navbar/index'
import Input from '../../TextInput/index'

const Index = (props) => {
    const { displayName} = props
const [fullname, setFullname] = useState('')
const [email, setEmail] = useState('')
const [phoneNumber, setPhoneNumber] = useState('')

    const handleChange = (e) => {
        const {name, value} = e.currentTarget;
    if (name === 'fullname'){
        setFullname (value)
    }else if (name === 'email'){
        setEmail(value)
    }else if (name === 'phoneNumber'){
        setPhoneNumber(value)
    }
    }

    return (
        <div>
            <Navbar displayName={displayName}  />
            <h1> My profile</h1>

        <form>
        <Input
                     placeholder="Enter FullName"
                     type="text" 
                     label = "Fullname"
                     name="fullname"
                     value={fullname}
                     handleChange={handleChange}
                    //  handleKeyUp={handleKeyUp}
                    />
                    <Input
                     placeholder="Enter Email Address"
                     type="email" 
                     label = "Email"
                     name="email"
                     value={email}
                     handleChange={handleChange}
                    //  handleKeyUp={handleKeyUp}
                    //  error={errorEmail}
                   />
                    <Input
                     placeholder="Enter Phone Number"
                     type="text" 
                     label = "Phone Number"
                     name="phoneNumber"
                     value={phoneNumber}
                     handleChange={handleChange}
                    //  handleKeyUp={handleKeyUp}
                    //  error={errorPassword}
                    />
        </form>

        </div>

    )
}

export default Index;