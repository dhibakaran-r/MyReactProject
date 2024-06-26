import React,{useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import {passwordValidator} from "../Components/regexValidator"; 
import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import pic from "../assets/images/rdkw.jpg"
import pic from "../assets/images/login.jpg"
// import pic from "../assets/images/login2.jpg"
const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [inputs, setInputs] = useState({username: '', password: ''});
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const passwordVisibilit = () => {
        setShowPassword(!showPassword);
    }

    const handleChange = (e) =>{
        setInputs({
            ...inputs, [e.target.name]: e.target.value
        })
    }

    useEffect(()=> {
        if(localStorage.getItem('authentication')) navigate('/')
    },[])

    const formSubmit = (e) =>{
        e.preventDefault();
        setErrorMessage('')
        setSuccessMessage('')
        if(!passwordValidator(inputs.password)){
            return setErrorMessage('Password should have at least one upper case letter, one lower case letter, one digit, one special character and Minimum eight character.'); 
        }

        if(inputs.username !== "Admin" && inputs.password !== "@Admin-07") return setErrorMessage("Invalid Password");

        navigate('/');
        localStorage.setItem('authentication', true);

        setSuccessMessage('Successfully Validated');

    }

    return (  
        <div className="login-container">

            <div className="login-box">

                <div className="logo">
                    <img src={pic} alt="logo"/>
                        <div className="para">
                            <h2>rdk texparts</h2>
                        <   p>simply make yearned solution</p>
                        </div>
                </div>

                <form className="login-form" onSubmit={formSubmit}>
                
                    <input className="username input-field" placeholder="Username" 
                        name="username"  onChange={handleChange}  required />
                
                    <span className="password-field">
                        <input className="password input-field"
                            type = {showPassword ? 'text' : 'password'}
                            placeholder="Password"  name="password" onChange={handleChange} required/>
                        <span className="icons" onClick={passwordVisibilit}>
                            {showPassword ? <FaEye/> : <FaEyeSlash/>}
                        </span>    
                    </span>
                    {errorMessage.length > 0 && (
                        <span className="error-msg" style={{color: "red"}}>{errorMessage}</span>

                    )}

                    <button type="submit" className="login-button">Login</button>
                    {successMessage.length > 0 && (
                        <span className="error-msg" style={{color: "green"}}>{successMessage}</span>

                    )}

                </form>

            </div>
        
        </div>
    );
}

export default Login;