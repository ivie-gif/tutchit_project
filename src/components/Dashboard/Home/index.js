import React, {useState} from 'react'
import Navbar from '../Navbar'

import Input from '../../TextInput/index'
import Button from '../../Button/index'

import {firestore, } from '../../../config/firebase'

const Index = (props) => {
    const {handleLogout, displayName} = props

const [productName, setProductName] = useState('')
const [productValue, setProductValue] = useState('')
const [productQuantity, setProductQuantity] = useState('')
const [errorProductName, setErrorProductName] = useState('');
const [errorProductValue, setErrorProductValue] = useState('');
const [errorProductQuantity, setErrorProductQuantity] = useState('');
const [errorMessage, setErrorMessage] = useState('');


const handleChange = (e) => {
    const {name, value} = e.currentTarget;

    if (name === 'productName'){
        setProductName(value)
    }else if (name === 'productValue'){
        setProductValue(value)
    }else if (name === 'productQuantity'){
        setProductQuantity(value)
    }
}
  

const handleKeyUp = (e) => {
    setErrorMessage('')
}


const uid = localStorage.getItem('uid'); 

const handleSubmit = (e) => {
    e.preventDefault();

    try {
        if (!productName || !productValue || !productQuantity){
               return setErrorMessage ('All fields are required')
        
    }

    const data = firestore.collection ('itemproducts').add({
        uid,
        productName,
        productValue,
        productQuantity
    })
   
console.log('product added')
} catch (error) {
    
}
} 



    return (
        <div>
            <Navbar displayName={displayName}  handleLogout={handleLogout}/>
            <h1>This is my Dashboard</h1>


            <form onSubmit={handleSubmit}>
            {errorMessage ? <p className="errormsg">{errorMessage}</p> : ''}
                    <Input
                     placeholder="Enter ProductName"
                     type="text" 
                     label = "Product Name"
                     name="productName"
                     value={productName}
                     handleChange={handleChange}
                        error={errorProductName}
                     handleKeyUp={handleKeyUp}
                    />
                    <Input
                     placeholder="Enter a Value"
                     type="text" 
                     label = "Product Value"
                     name="productValue"
                     value={productValue}
                     handleChange={handleChange}
                     handleKeyUp={handleKeyUp}
                     error={errorProductValue}
                   />
                    <Input
                     placeholder="Enter a Quantity"
                     type="text"
                     label = "Product Quantity"
                     name="productQuantity"
                     value={productQuantity}
                     handleChange={handleChange}
                     handleKeyUp={handleKeyUp}
                     error={errorProductQuantity}
                    />
                    <Button title="ADD" className="buttonsignup blue" />
                    </form>


        </div>
    )
}

export default Index;