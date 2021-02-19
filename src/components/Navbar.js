import React from 'react'

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
                            <li>HOME</li>
                            <li>NEWS</li>
                            <li className="disable">SPORT</li>
                            <li className="disable">POLITICS</li>
                            <li className="disable">ENTERTAINMENT</li>
                            {/* <li className="none">
                                MORE
                                 <span>&#8964</span> 
                            </li> */}
                            <div className="menu-list none">
                        <ul>
                            
                            <li className="menu-item"> MORE <span>&#9660; </span>
                                <div className="slide">
                                    <ul>
                                        <li><a className="links" href="/">SPORT</a></li>
                                        <li><a className="links" href="/">POLITICS</a></li>
                                        <li><a className="links" href="/">ENTERTAINMENT</a></li>
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
