import React ,{useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as faicon from "react-icons/fa"
import * as aiicon from "react-icons/ai"
import * as ioicon from "react-icons/io"
import * as mdicon from "react-icons/md"
import { IconContext } from 'react-icons'
import { NavbarData } from './NavbarData'
import './Navbar.css'

function Navbar() {

    const [sidebar, setSidebar] = useState(false);  

    const showSidebar = () => setSidebar(!sidebar);

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
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <div className='navbar'>
                <Link to="#" className='menus'>
                <faicon.FaBars onClick={showSidebar}/>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-bar active' : 'nav-bar'}>
                <ul className='nav-items'>
                    <li className='toggle'>
                        <Link to='#' className='menus'>
                            <aiicon.AiOutlineClose onClick={showSidebar}/>
                        </Link>
                    </li>
                    {NavbarData.map((navData, index) => {
                        return (
                            <li key={index} className={navData.class}>
                                <Link to={navData.path}>
                                    {navData.icon}
                                    <span>{navData.title}</span>
                                </Link>
                            </li>
                        )   
                    })}
                    <li className='item-name' onClick={handleLogout}>
                        <Link>
                            <ioicon.IoIosLogOut /><span>Logout</span>                        
                        </Link>

                    </li>
                </ul>
            </nav>
            </IconContext.Provider>
        </>
  )
}

export default Navbar;