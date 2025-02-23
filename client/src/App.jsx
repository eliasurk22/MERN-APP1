import { useState,useEffect } from 'react'
import './App.css'
import axios from 'axios';

import './App.css';
import RegisterForm from './RegisterForm';
function App() {
const [message,setMessage] = useState('')
useEffect(()=>{
//Fetch ApI
axios.get("http://localhost:9000/")
.then(response => {
setMessage(response.data)
})
.catch(error=>{
setMessage(error.message)
})
},[])
return (
<>
<h1 className='text-blue-500'>Welcome to Electricity Board Management</h1>
<RegisterForm/>
</>
)
}
export default App