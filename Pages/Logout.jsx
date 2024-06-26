import React from "react";
import {useState, useEffect } from "react";
import {useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();    
    const [logout, setLogout] = useState(false);
    useEffect(()=> {
        if(!localStorage.getItem('authentication')) navigate('/login')
    },[logout]);
    
    const handleLogout = (e) =>{
        e.preventDefault();
        localStorage.removeItem('authentication');
        setLogout(true);
    }

    return (  
        <div>
            Dashboard
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export  default Logout;