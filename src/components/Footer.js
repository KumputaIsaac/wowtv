import React from 'react'

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
                        <div className="all"><a href="#home">HOME</a></div>
                        <div className="all"><a href="#news">NEWS</a></div>
                        <div className="all"><a href="#newssport">SPORT</a> </div>
                        <div className="all"><a href="#politics">POLITICS</a></div>
                        <div className="all"><a href="#entertainment">ENTERTAINMENT</a></div>
                    </div>
                </div>
                <div className="copyright">
                    <h2>&copy 2021  All Right Reserved</h2>
                </div>
            </footer>
        </div>
    )
}

export default Footer
