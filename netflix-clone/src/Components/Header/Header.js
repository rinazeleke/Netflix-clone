import React, { useEffect, useState } from 'react'
import './header.css'
import Natflix from '../../assets/images/netflix.png'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountBoxIcon from '@mui/icons-material/AccountBox';


const Header = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 60) {
                setShow(true);
            } else setShow(false);
        
        })
        return () => {
            window.removeEventListener("scroll",null);
          };
    }, []);
   
  return (
    <div className= {`header_outer_container ${show && "nav__black"}`}>
        <div className='header_container'>
            <div className='header_left'>
                <ul>
                <li><img src={Natflix}alt='Netflix logo' width='100'/></li>
                    <li>HOME</li>
                    <li>TVShows</li>
                    <li>Movies</li>
                    <li>Latest</li>
                    <li>Mylist</li>
                    <li>Browse by languages</li>
                </ul>
            </div>
            <div className='header_right'>
                <ul className='s'>
                    <li><SearchIcon/></li>
                    <li><NotificationsNoneIcon/></li>
                    <li><AccountBoxIcon/></li>
                    <li><ArrowDropDownIcon/></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header
