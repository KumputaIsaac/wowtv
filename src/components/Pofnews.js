import React from "react";

const Pofnews = () => {
	const test = [
		{
			image: "https://naija.com/wp-content/uploads/2020/10/19a.jpg",
			title: "KBLAQ ALADIRE: Adire Stocks in Ekiti Booming",
			text: "Clothings and fashion stock in Ado rises ",
		},
		{
			image: "https://miro.medium.com/proxy/0*9N9J9YiGJrISLIBP.png",
			title: "Fayose Bewitched,",
			text: " Enslaved Ekiti People For Four Years  Omotunde  ",
		},
		{
			image:
				"https://www.naijaloaded.com.ng/wp-content/uploads/2021/03/pjimage-17.jpg",
			title: "The House Of Represntatives Ekiti, ",
			text: "Demand an increae in the basic salary or workers",
		},
	];
	// &#8928;
	return (
		<section id="news" className="newssport">
			<h1>
				<span>
					<i class="fas fa-caret-left"></i>
				</span>
				POF NEWS
			</h1>
			<div className="pofnewssport">
				<div className="details">
					{test.map((test, i) => {
						return (
							<div className="fayose" key={i}>
								<div className="fayoseimage">
									<img src={`${test.image}`} alt="" />
								</div>
								<div className="fayosetext">
									<div className="title">
										<h3>{test.title}</h3>
										<p>{test.text} </p>
									</div>
								</div>
								<hr />
							</div>
						);
					})}

					{/* <div className="fayose">
                        <div className="fayoseimage">
                            <img src="https://miro.medium.com/proxy/0*9N9J9YiGJrISLIBP.png" alt=""/>
                        </div>
                        <div className="fayosetext">
                            <div className="title">
                                <h3>Burna song in biden innuguration</h3>
                                <p>the 46 song wey biden wan use enter post, na burna day king am</p>
                            </div>
                        </div>
                    </div>

                    <div className="fayose">
                        <div className="fayoseimage">
                            <img src="https://www.naijaloaded.com.ng/wp-content/uploads/2021/03/pjimage-17.jpg" alt=""/>
                        </div>
                        <div className="fayosetext">
                            <div className="title">
                                <h3>Burna song in biden innuguration</h3>
                                <p>the 46 song wey biden wan use enter post, na burna day king am</p>
                            </div>
                        </div>
                    </div> */}

					<div className="fayose">
						<div className="fayoseimage">
							<img
								src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/sale-advert-shopping-discount-promo-table-laptop-promo-code-design-template-0aef6227891580ac84a2f5b6cfc8de76_screen.jpg?ts=1561513027https://d1csarkz8obe9u.cloudfront.net/posterpreviews/sale-advert-shopping-discount-promo-table-laptop-promo-code-design-template-0aef6227891580ac84a2f5b6cfc8de76_screen.jpg?ts=1561513027s"
								alt=""
							/>
						</div>
					</div>
				</div>
				<div className="advert"></div>
			</div>
		</section>
	);
};

export default Pofnews;
