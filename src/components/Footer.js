import React from 'react'
import {Link} from "react-router-dom";

const Footer = () => {

    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
     };

    return (
        <div>
            <button id="myBtn" onClick={scrollTop} title="Go to top">
                <i className="fas fa-chevron-up"></i>
            </button>
            <footer>
                <div className="explore">
                    <h1>Explore the POF TV News</h1>
                </div>
                <div className="allnavsbelow">
                    <div className="homenewssport">
                        <div className="all"><Link to='/'>HOME</Link></div>
                        <div className="all"><Link to='/news'> NEWS</Link></div> 
                        <div className="all"><a href="#newssport">SPORT</a> </div>
                        <div className="all"><a href="#politics">POLITICS</a></div>
                        <div className="all"><a href="#entertainment">ENTERTAINMENT</a></div>
                    </div>
                </div>
                <div className="copyright">
                    <h2>&copy; 2021  All Right Reserved</h2>
                </div>
            </footer>
        </div>
    )
}

export default Footer
