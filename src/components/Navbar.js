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
                            <Link to='/sport'><li className="disable">SPORT</li> </Link>
                            <Link to ='/politics'> <li className="disable">POLITICS </li></Link>
                            <li className="disable"><a className="links" href="#entertainment">ENTERTAINMENT</a></li>
                            
                            <div className="menu-list none"> 
                        <ul>
                            
                            <li className="menu-item"> MORE <span>&#9660; </span>
                                <div className="slide">
                                    <ul>
                                        <Link to='/sport'><li>SPORT</li></Link>
                                        <Link to='/politics'><li>POLITICS</li></Link>
                                        {/* <li><a className="links" href="#politics">POLITICS</a></li> */}
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
