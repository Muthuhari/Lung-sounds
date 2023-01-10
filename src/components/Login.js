import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import auth from './firebase/firebase';
import {SignJWT} from "jose"
import Cookies from 'js-cookie'
import "../styles/login.css";



const Login = () => {
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState('');

    const userSignin = ()=>{
        signInWithEmailAndPassword(auth, username, password)
        .then(async(userCredential) => {
        // Signed in eka
        const user = userCredential.user;
        console.log(user)

        const jwt  = await new SignJWT({user:user.uid,email:user.email})
            .setProtectedHeader({alg:'HS256',typ:'JWT'})
            .setExpirationTime('1h')
            .sign(new TextEncoder().encode('Hello-World'))
        

        Cookies.set('jwt',jwt)
        window.location.href = '/signup-patient'
        })
        .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        });
}
    return (
        
        <div className='container' >              
        {}
            <div className="screen__content">
            
                

                <div className='content_2'>
                    <h2>User LogIn</h2>
                    <label>Enter username  :</label><br/>
                    <input className="login__input" type='text' placeholder='UserName' value={username} 
                    onChange={e=>{
                        e.preventDefault();
                        setUsername(e.target.value);
                    }}/> 
                    <br/><br/>
                    <label>Enter password :</label><br/>
                    <input  className="login__input" type='password' placeholder="password" value={password}
                    onChange={e=>{
                        e.preventDefault();
                        setPassword(e.target.value);
                    }} />
                    <br/><br/>

                    <button onClick={userSignin} className="button login__submit">
                        <div style={{align:'center',margin:'auto'}}>Log in</div>
                    </button>
                    <br/>
                    
                    
                </div>
            
            </div>
                   
        </div>

        
        
);
}

export default Login;

