import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import auth from './firebase/firebase';
import {SignJWT} from "jose"
import Cookies from 'js-cookie'
import "../styles/login.css";
import { Link } from "react-router-dom";



const Login = () => {
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState('');

    const userSignin = ()=>{
        signInWithEmailAndPassword(auth, username, password)
        .then(async(userCredential) => {

        // Signed in 
        const user = userCredential.user;
        console.log(user)

       // create jwt
        const jwt  = await new SignJWT({user:user.uid,email:user.email})
            .setProtectedHeader({alg:'HS256',typ:'JWT'})
            .setExpirationTime('1h')
            .sign(new TextEncoder().encode('Hello-World'))
        
       // save cookie
        Cookies.set('jwt',jwt)
        window.location.href = '/DataInput'
        })
        .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        });
}
    return (
        
        <div className='container' >              
        {}
            <div className="main__content">
                <div className='content_2'>
                   
                    <label>Enter username  :</label><br/>
                    <input className="login__input" 
                    type='text' 
                    placeholder='User Name' 
                    value={username} 
                    onChange={e=>{
                        e.preventDefault();
                        setUsername(e.target.value);
                    }}/> 
                    <br/><br/>
                    
                    <label>Enter password :</label><br/>
                    <input  className="login__input" 
                    type='password' 
                    placeholder="password" 
                    value={password}
                    onChange={e=>{
                        e.preventDefault();
                        setPassword(e.target.value);
                    }} />
                    <br/><br/>

                    <button onClick={userSignin} 
                     className="button login__submit">
                        <div style={{align:'center',margin:'auto'}}>Log in</div>
                    </button>
                    <br/>
                    <p className="sinup_button">
                            Don't have an account? <Link to="/signup">Create account</Link>{" "}
                        </p>
        
                    
                </div>
            
            </div>
                   
        </div>

        
        
);
}

export default Login;

