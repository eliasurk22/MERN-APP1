import { useState,useEffect } from 'react'
import './App.css'
import axios from 'axios';
function App() {
const [message,setMessage] = useState('')
useEffect(()=>{
//Fetch ApI
axios.get("http://localhost:8000/")
.then(response => {
setMessage(response.data)
})
.catch(error=>{
setMessage(error.message)
})
},[])
return (
<>
<h1>Welcome to MERN Full Stack</h1>
<div>
Server Response: {message}
</div>
</>
)
}
export default App