import React from 'react'
import {Link} from "react-router-dom";
import Logo from '../image/logo.jpg'

const Navbar = () => {
    return (
        <div>
            <div className="pofnewsbackground"></div>
            <div className="pofnewsbackgroundsmallcolor"></div>
            {/* <div className="contain"> */}
                <section className="header">
                    <div className="poftvlogo">
                        <img src={Logo} alt=""/>
                    </div>
                    <div className="navbar">
                        <ul>
                            <Link to='/'><li>HOME</li></Link>
                            <Link to='/news'><li>NEWS</li></Link>
                            <Link to='/sport'><li className="disable">SPORT</li> </Link>
                            <Link to ='/politics'> <li className="disable">POLITICS </li></Link>
                            <Link to='/entertainment'> <li className="disable">ENTERTAINMENT</li></Link>
                            
                            <div className="menu-list none"> 
                        <ul>
                            
                            <li className="menu-item"> MORE <span>&#9660; </span>
                                <div className="slide">
                                    <ul>
                                        <Link to='/sport'><li>SPORT</li></Link>
                                        <Link to='/politics'><li>POLITICS</li></Link>
                                        <Link to='/entertainment'><li>ENTERTAINMENT</li></Link>
                                    </ul>
                                </div>    
                            </li>
                        </ul>
                    
                    </div>

                            
                        </ul>
                    </div>
                    <div className="search">
                        <input type="text" placeholder="Search"/> <span> <i className="fas fa-search"></i></span>
                    </div>
                    <div className="hiddensearch">
                        <i className="fas fa-search"></i>
                    </div>
                </section>
            {/* </div> */}
        </div>
    )
}

export default Navbar
