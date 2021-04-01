import React,{useState} from 'react'
import './adminpage.css'
import Logo from '../../image/logo.jpg'
import Welcomespeech from '../../components/Welcomespeech'

const Adminpage = () => {
    const [showpages, setshowpages] = useState(true)
    
    const show=()=>{
        if (showpages === true){
            setshowpages(false)
        }
    }

    const showdashboard=()=>{
        if(showpages===false){
            setshowpages(true)
        }
    }
    const test =
        {
        "messages":"328",
        "visits":"1243",
        "subscribers":"121",
        "comments":"653",
        }
    const posts =[
        {
        'header':"Burna Boy’s Song in Biden Inauguration Playlist",
        "title": "The 46-songs playlist was curated to reflect diversity in the US.",
        "content": "The 46-songs playlist was curated to reflect diversity in the US. 46-songs playlist was curated to reflect diversity in the playlist was curated to reflect diversity in the US. 46-songs playlist was curated to reflect diversity",
        "image": "https://ichef.bbci.co.uk/news/976/cpsprodpb/13C83/production/_117572018_gettyimages-1207290776.jpg",
        },
        {
        'header':"Burna Boy’s Song in Biden Inauguration Playlist",
        "title": "The 46-songs playlist was curated to reflect diversity in the US.",
        "content": "The 46-songs playlist was curated to reflect diversity in the US. 46-songs playlist was curated to reflect diversity in the playlist was curated to reflect diversity in the US. 46-songs playlist was curated to reflect diversity",
        "image": "https://ichef.bbci.co.uk/news/976/cpsprodpb/13C83/production/_117572018_gettyimages-1207290776.jpg",
        },
        {
        'header':"Burna Boy’s Song in Biden Inauguration Playlist",
        "title": "The 46-songs playlist was curated to reflect diversity in the US.",
        "content": "The 46-songs playlist was curated to reflect diversity in the US. 46-songs playlist was curated to reflect diversity in the playlist was curated to reflect diversity in the US. 46-songs playlist was curated to reflect diversity",
        "image": "https://ichef.bbci.co.uk/news/976/cpsprodpb/13C83/production/_117572018_gettyimages-1207290776.jpg",
        },
        {
        'header':"Burna Boy’s Song in Biden Inauguration Playlist",
        "title": "The 46-songs playlist was curated to reflect diversity in the US.",
        "content": "The 46-songs playlist was curated to reflect diversity in the US. 46-songs playlist was curated to reflect diversity in the playlist was curated to reflect diversity in the US. 46-songs playlist was curated to reflect diversity",
        "image": "https://ichef.bbci.co.uk/news/976/cpsprodpb/13C83/production/_117572018_gettyimages-1207290776.jpg",
        },
    ]
    
    
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
                                <p>WELCOME TO WOW TV</p>
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
                    <p onClick={showdashboard}>DASHBOARD</p>
                    <p>CHARTS</p>
                    <p>FORMS</p>
                    <p>CONTACTS</p>
                    <hr />
                    <p>components</p>
                    <hr />
                    <p onClick={show}>PAGES</p>
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
                    <div class="mdsc" style={{display: showpages ? 'flex' : 'none' }}>
                        <div class="messages">
                            <div class="icon"><i class="far fa-envelope"></i></div>
                            <p>MESSAGES / MAIL</p>
                            <h1>{test.messages}</h1>
                        </div>
                        <div class="messages">
                            <div class="icon"><i class="fas fa-eye"></i></div>
                            <p>DAILY VISITS</p>
                            <h1>{test.visits}</h1>
                        </div>
                        <div class="messages">
                            <div class="icon"><i class="fas fa-user-alt"></i></div>
                            <p>SUBSCRIBERS</p>
                            <h1>{test.subscribers}</h1>
                        </div>
                        <div class="messages">
                            <div class="icon"><i class="fas fa-comments"></i></div>
                            <p>COMMENTS</p>
                            <h1>{test.comments}</h1>
                        </div>
                    </div>

                    <div className="pages"  style={{display: showpages ? 'none' : 'block' }}>
                        {
                            posts.map((post,i)=>{
                                return(
                                    <div className="pagecomponent" key={i}>
                                        <div className="editside">
                                            <div className="Allthosetalk">
                                                <h1>{post.header}</h1>
                                                <p>{post.title}</p>
                                                <hr />
                                                <p>{post.content}</p>
                                            </div>
                                            <div className="buttons">
                                                <button>EDIT HEADER</button>
                                                <button>EDIT TITLE</button>
                                                <button>EDIT CONTENT</button>
                                            </div>
                                        </div>
                                        <div className="deletechange">
                                            <div className="buttonchangedelete">
                                                <button>CHANGE PICTURE</button>
                                                <button>DELETE POST</button>
                                            </div>
                                            <div className="theimage">
                                                <img src={`${post.image}`} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                )
                                
                            })
                        }
                        
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
            <div className="usepc">
                <h1>Use a laptop to access this page</h1>
            </div>
        </div>
    )
}

export default Adminpage
