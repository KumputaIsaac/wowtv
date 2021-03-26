import React from 'react'

const Sports = () => {
    const test = [
        {
            "image":"https://www.naijaloaded.com.ng/wp-content/uploads/2020/03/Kelechi-Iheanacho-naijaloaded.jpg",
            "title": "The House Of Represntatives Ekiti",
            "text": "Fayose Bewitched, Enslaved Ekiti People For Four Years – Omotunde "
        },
        {
            "image":"https://www.naijaloaded.com.ng/wp-content/uploads/2017/03/Temmie-Ovwasa.jpg",
            "title": "Burna song in biden innuguration",
            "text": "the 46 song wey biden wan use enter post, na burna day king am "
        },
        {
            "image":"https://images.daznservices.com/di/library/GOAL/c2/94/cristiano-ronaldo-ballon-dor-gfx_69txdzyqqxsv12bwau4qq7xkl.jpeg?t=1537186536&amp;quality=60&amp;w=700",
            "title": "Burna song in biden innuguration",
            "text": "Fayose Bewitched, Enslaved Ekiti People For Four Years – Omotunde "
        }
    ]
    return (
        <section id='newssport' className="newssport">
            <h1><span>&#8928;</span>SPORT</h1>
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
                        <div className="fayoseimage ">
                            <img src="" alt=""/>
                        </div>
                        <div className="fayosetext">
                            <div className="title">
                                <h3>Burna song in biden innuguration</h3>
                                <p>the 46 song wey biden wan use enter post, na burna day king am</p>
                            </div>
                        </div>
                    </div>

                    <div className="fayose ">
                        <div className="fayoseimage ">
                            <img src="" alt=""/>
                        </div>
                        <div className="fayosetext">
                            <div className="title">
                                <h3>Burna song in biden innuguration</h3>
                                <p>the 46 song wey biden wan use enter post, na burna day king am</p>
                            </div>
                        </div>
                    </div> */}
                    
                    <div className="fayose ">
                        <div className="fayoseimage">
                            <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/sale-advert-shopping-discount-promo-table-laptop-promo-code-design-template-0aef6227891580ac84a2f5b6cfc8de76_screen.jpg?ts=1561513027" alt=""/>
                        </div>
                        {/* <div className="fayosetext">
                            <div className="title">
                                <img src="https://image.shutterstock.com/image-photo/concerned-wondered-adult-european-guy-600w-1707717628.jpg" alt=""/>
                                <h2>ADVERT</h2>
                            </div>
                        </div>  */}
                    </div>
                </div>
                <div className="advert two">

                </div>
            </div>
            
        </section>
    )
}

export default Sports
