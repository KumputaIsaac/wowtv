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
                        <div className="all">HOME</div>
                        <div className="all">NEWS</div>
                        <div className="all">SPORT</div>
                        <div className="all">POLITICS</div>
                        <div className="all">ENTERTAINMENT</div>
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
