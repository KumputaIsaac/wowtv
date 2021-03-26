import React from 'react'

const Entertainment = () => {
    const test = [
        {
            "image":"https://www.naijaloaded.com.ng/wp-content/uploads/2021/03/burna-2-copy.jpg",
            "title": "The House Of Represntatives Ekiti",
            "text": "Fayose Bewitched, Enslaved Ekiti People For Four Years – Omotunde "
        },
        {
            "image":"https://i.guim.co.uk/img/media/216a6d86592a72e2068cf60a8edc9d42256fa13f/0_272_1707_1023/master/1707.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=9e96dfd5989947f91315e89c59bbd7bd",
            "title": "Burna song in biden innuguration",
            "text": "the 46 song wey biden wan use enter post, na burna day king am "
        },
        {
            "image":"https://static.billboard.com/files/2020/04/Davido-press_courtesy-of-Davido-Billboard-1548-1587682585-1024x677.jpg",
            "title": "Burna song in biden innuguration",
            "text": "Fayose Bewitched, Enslaved Ekiti People For Four Years – Omotunde "
        }
    ]
    return (
        <section id='entertainment' className="newssport">
            <h1><span>&#8928;</span>ENTERTAINMENT</h1>
            <div className="pofnewssport">
                <div className="details">
                {
                    test.map((test,i)=>{
                        return(
                            <div className="fayose" key={i}>
                                <div className="fayoseimage">
                                    <img src={`${test.image}`} alt=""/>
                                </div>
                                <div className="fayosetext">
                                    <div className="title">
                                        <h3>{test.title}</h3>
                                        <p>{test.text} </p>
                                    </div>
                                </div>
                                <hr/>
                            </div> 
                        )
                    })
                }
                    {/* <div className="fayose">
                        <div className="fayoseimage">
                            <img src="" alt=""/>
                        </div>
                        <div className="fayosetext">
                            <div className="title">
                                <h3>Athletes storm Ado Ekiti for AFN classicsSport </h3>
                                <p>Ekiti State: Cross River Athlete Emerges Winner Of Maiden Ikogosi Marathon – Ekiti State</p>
                            </div>
                        </div>
                    </div>

                    <div className="fayose">
                        <div className="fayoseimage remove">
                            <img src="" alt=""/>
                        </div>
                        <div className="fayosetext">
                            <div className="title">
                                <h3>Burna song in biden innuguration</h3>
                                <p>the 46 song wey biden wan use enter post, na burna day king am</p>
                            </div>
                        </div>
                    </div>

                    <div className="fayose comot">
                        <div className="fayoseimage">
                            <img src="" alt=""/>
                        </div>
                        <div className="fayosetext">
                            <div className="title">
                                <h3>Burna song in biden innuguration</h3>
                                <p>the 46 song wey biden wan use enter post, na burna day king am</p>
                            </div>
                        </div>
                    </div> */}
                    
                    <div className="fayose none">
                        <div className="fayoseimage">
                            <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/sale-advert-shopping-discount-promo-table-laptop-promo-code-design-template-0aef6227891580ac84a2f5b6cfc8de76_screen.jpg?ts=1561513027" alt=""/>
                        </div>
                        {/* <div className="fayosetext">
                            <div className="title">
                                <img src="https://image.shutterstock.com/image-photo/concerned-wondered-adult-european-guy-600w-1707717628.jpg" alt=""/>
                                <h2>ADVERT</h2>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="advert three">

                </div>
            </div>
            
        </section>
    )
}

export default Entertainment
