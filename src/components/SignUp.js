import { useRef, useState } from "react";
import { signup } from "./firebase/firebase";
import '../styles/SignUp.css';
import { Link } from "react-router-dom";



export default function App(){
  const [ loading, setLoading ] = useState(false);
  const emailRef =useRef();
  const passwardRef =useRef();
  
  const [emailError, setEmailError] = useState('');

const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if (!emailRegex.test(email)) {
    setEmailError('Invalid email format');
  } else {
    setEmailError('');
  }
};

  async function handlesignup(){
    setLoading(true);
    try{
    await signup(emailRef.current.value ,passwardRef.current.value);
    }catch{
      alert("Alrady Exist");
    }
    setLoading(false);
  }


  return (
    <div  id="main">
      <div id="sub-main" >        
        <div id="imag">
            <img src="./img/User.png" alt= "profile" className="profile"  />
        </div>
        <div id="fields" >
          <label id = "lble">User Email</label><br/>
          <input ref={emailRef} placeholder="User Email" onBlur={e => validateEmail(e.target.value)} />
{emailError && <div className="error">{emailError}</div>}
<br/>
          <label id = "lble">User passward</label><br/>
          <input ref={ passwardRef } type="passward" placeholder="Passwarad" /><br/>

          <label id = "lble">User Name</label><br/>
          <input placeholder="User Name" /><br/>
          
          <label id = "lble"> User Contact</label><br/>
          <input placeholder="User contact" /><br/>

          <label id = "lble"> User Country</label><br/>
          <input placeholder="User Country" /><br/>
         
          <br/>
          <button disabled={loading} onClick={handlesignup}  >signup</button>
        </div>
        <p className="sinup_button">
        Do you already have an account? <Link to="/login">Login</Link>{" "}
        </p>
        {/*
        <a href="/signup"><button className="btn">Sign Up</button></a>
        */}

        
      </div>   
    </div>
  );
}