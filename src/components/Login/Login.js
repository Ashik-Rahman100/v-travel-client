import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth();

    const location = useLocation();
    const history = useHistory();
 
    const redirect_uri = location.state?.from || '/home';
 
    const signInUsingGoogleLogin = () =>{
       signInUsingGoogle()
       .then((result) => {
                // console.log(result.user);
                history.push(redirect_uri);
                window.location.reload()
              })
    }


    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('')
    // const [isLogin, setIsLogin] = useState(false)

    // email handler
    // const handleEmailChange = (e) =>{
    //     setEmail(e.target.value);
    // }

    // // password handler
    // const handlePasswordChange = (e) =>{
    //     setPassword(e.target.value);
    // }
    // password validation
    
  
    // // Registration handle
    // const handleRegistration = (e) =>{
    //     console.log(email, password);
    //     signInUsingEmailPassword(auth,email,password);
        
    // }

    // // palready login checked
    // if(isLogin){
    //     processLogin(auth,email, password)
    // }
    // else{
    //     handleRegistration(auth,email,password)
    // }
    
    // const toggleLogin = e =>{
    //     setIsLogin(isLogin)
    //     console.log(e.target.checked);
    // }

    return (
        <div >
            <h1 className= 'text-center mt-5 fw-bold'><span className ='text-warning'>CONTACT </span>US</h1>
            <div className='w-75 mx-auto rounded p-5 mt-4' style= {{backgroundColor:'tomato'}}>
            <div className= 'w-75 mx-auto ' >
                <div >
                    <h2 className = 'text-white text-center'>Please Log In</h2>
                    
                    <div>
                        <label className= 'fw-bold text-white' htmlFor="">Email: </label>
                        <input  className='form-control' type="email" name="" id="" placeholder='Enter Your Email' required /><br />
                    </div>
                    <div>
                     <label className= 'fw-bold text-white' htmlFor="">Password: </label>
                    <input  className='form-control' type="password" name="" id="" placeholder='Enter Your Email' required/><br />
                    </div>
                    <div>
                     
                   <input  type="checkbox" name="" id="" />
                    <label className= 'fw-bold text-white' htmlFor=""> already Sign in</label>
                    <br />
                    </div>
                </div>
            </div>
            <div>
            {/* <button onClick ={handleRegistration} className= 'details'>SignIn</button> */}
            <button onClick= {signInUsingGoogleLogin} className= 'details'>Google Sign in</button>
            </div>
            </div>
        </div>
    );
};

export default Login;