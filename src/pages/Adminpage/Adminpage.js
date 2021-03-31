import React from 'react'
import './adminpage.css'
import Logo from '../../image/logo.jpg'
import Welcomespeech from '../../components/Welcomespeech'

const Adminpage = () => {
    return (
        <div>
            <section class="dashboard">
                <div class="dashboardup">
                    <div class="logo">
                        <img src={Logo} alt=""/>
                    </div>
                    <div class="managepost">
                        <div class="welcomedashboard">
                            <div class="dashboardtext">
                                <p>DASHBOARD</p>
                                <hr/>
                            </div>
                            <div class="anotherwelcome">
                                <p>WELCOME TO POF TV</p>
                                <p>MANAGE POSTS</p>
                            </div>
                            

                        </div>
                        <div class="searchandicon">
                            <div class="searchinput">
                                <input placeholder="Search Post" type="text"/>
                                <i class="fas fa-search"></i>
                            </div>
                            <i class="far fa-bell"></i>
                            <div class="profilepicture">
                                <i class="fas fa-user-alt"></i>
                            </div>
                                
                        </div>
                        
                    </div>
                </div>
            </section>
            <section class="content">
                <div class="left">
                    <p>Main</p>
                    <hr/>
                    <p>DASHBOARD</p>
                    <p>CHARTS</p>
                    <p>FORMS</p>
                    <p>CONTACTS</p>
                    <hr />
                    <p>components</p>
                    <hr />
                    <p>PAGES</p>
                    <p>POF NEWS</p>
                    <p>ENTERTAINMENT</p>
                    <p>SPORTS</p>
                    <p>POLITICS</p>
                    <p>ALL NEWS</p>
                    <hr />
                    <p>Accounts</p>
                </div>
                <div class="right">
                    <hr/>
                    <Welcomespeech />
                    <div class="mdsc">
                        <div class="messages">
                            <div class="icon"><i class="far fa-envelope"></i></div>
                            <p>MESSAGES / MAIL</p>
                            <h1>328</h1>
                        </div>
                        <div class="messages">
                            <div class="icon"><i class="fas fa-eye"></i></div>
                            <p>DAILY VISITS</p>
                            <h1>1243</h1>
                        </div>
                        <div class="messages">
                            <div class="icon"><i class="fas fa-user-alt"></i></div>
                            <p>SUBSCRIBERS</p>
                            <h1>121</h1>
                        </div>
                        <div class="messages">
                            <div class="icon"><i class="fas fa-comments"></i></div>
                            <p>COMMENTS</p>
                            <h1>653</h1>
                        </div>
                    </div>
                    <section class="prevselect">
                        <div class="prevdate">&#9668; PREV DATE</div>
                        <div class="selectdate">&#9668; SELECT DATE &#9658;</div>
                        <div class="nextdate">NEXT DAY &#9658;</div>
                    </section>
                    <hr style={{marginTop:'10px'}}/>
                    <h1 style={{marginBottom:'300px'}}>POF TV Stats</h1>
                </div>
            </section>
        </div>
    )
}

export default Adminpage
