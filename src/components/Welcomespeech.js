import React from 'react'

const Welcomespeech = () => {
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
        <div>
            <div className="welcomedate">
                    <div className="welcome">
                        <h1>Welcome to WOW TV</h1>
                    </div>
                    <div className="date">
                        <h1 id="date">{realdate}</h1>
                    </div>
                </div>
        </div>
    )
}

export default Welcomespeech
