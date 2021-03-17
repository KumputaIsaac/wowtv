import React from 'react'
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="pofnewsbackground"></div>
            <div className="pofnewsbackgroundsmallcolor"></div>
            <div className="contain">
                <section className="header">
                    <div className="poftvlogo">
                        POT TV LOGO
                    </div>
                    <div className="navbar">
                        <ul>
                            <Link to='/'><li>HOME</li></Link>
                            <Link to='/news'><li>NEWS</li></Link>
                            <li className="disable"><a className="links" href="#newssport">SPORT</a> </li>
                            <li className="disable"><a className="links" href="#politics">POLITICS</a></li>
                            <li className="disable"><a className="links" href="#entertainment">ENTERTAINMENT</a></li>
                            {/* <li className="none">
                                MORE
                                 <span>&#8964</span> 
                            </li> */}
                            <div className="menu-list none"> 
                        <ul>
                            
                            <li className="menu-item"> MORE <span>&#9660; </span>
                                <div className="slide">
                                    <ul>
                                        <li><a className="links" href="#newssport">SPORT</a></li>
                                        <li><a className="links" href="#politics">POLITICS</a></li>
                                        <li><a className="links" href="#entertainment">ENTERTAINMENT</a></li>
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
            </div>
        </div>
    )
}

export default Navbar
