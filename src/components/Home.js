import React from 'react'

const Home = () => {
    let d = new Date();
    let day=d.getDay();
    let date= d.getDate();
    let month = d.getMonth();
    let weekday = ["Sunday","Monday","Monday","Wednesday","Thursday","Friday","Saturday"]
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let realday = weekday[day];
    let realmonth = months[month];
    let realdate = `${realday}  ${date},  ${ realmonth}`



    return (
            <section id='home' className="home">
                <div className="welcomedate">
                    <div className="welcome">
                        <h1>Welcome to WOW TV</h1>
                    </div>
                    <div className="date">
                        <h1 id="date">{realdate}</h1>
                    </div>
                </div>
                <div className="livesession">
                    <div className="livesessionvideo">
                        <img src="https://miro.medium.com/max/960/1*NjFV7dKXAsnCTAZW-WKBBA.jpeg" alt=""/>
                    </div>
                    <div className="burnachief">
                        <div className="burna try">
                            <div className="image">
                                <img src="https://storage.googleapis.com/assets-pam-blog/2020/06/b86c5b00-burna-boy-wonderful.jpg" alt=""/>
                            </div>
                            <div className="titleekiti">
                                <b>EKITI PEOPLE CULTURALLY HOMOGENEOUS PRACTICES AND HIGHLT ESTEEMED VALUE SYSTEM</b>
                            </div>
                            <hr/>
                            <div className="title">
                                <h3>Burna Boy’s Song in Biden Inauguration Playlist</h3>
                                <p>The 46-songs playlist was curated to reflect diversity in the US.</p>
                            </div>
                            <hr />
                            <div className="details">

                            </div>

                        </div>
                        <div className="burna try">
                            <div className="image">
                                <img src="https://i0.wp.com/media.premiumtimesng.com/wp-content/files/2020/02/NYSC3-1.jpg?fit=1500%2C1000&ssl=1" alt=""/>
                            </div>
                            <div className="title">
                                <h3>The Old Chief AYETADE AKANBI Explains  Ekiti Values</h3>
                                <p>The Chief of Ayedun West Hillside commented on Value system and its present degade.</p>
                            </div>
                            <hr/>
                            <div className="details">

                            </div>
                        </div>
                    </div>
                
                </div>
                <div className="poftvnextprev">
                    <div className="pottvsession">
                        <p> THE POF TV LIVE SESSION</p>
                    </div>
                    <div className="nextprev">
                        <div className="prev">
                        <span>&#8249;</span> PREV
                        </div>
                        <div className="next">
                            NEXT <span>&#8250;</span>
                        </div>
                    </div>
                </div>
                <div className="ekitipeople">
                    <p>EKITI PEOPLE CULTURALLY HOMOGENEOUS PRACTICES AND HIGHLT ESTEEMED VALUE SYSTEM</p>
                </div>
            </section>
    
    )
}

export default Home
