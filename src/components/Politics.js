import React from "react";

const Politics = () => {
	const test = [
		{
			image:
				"https://www.naijaloaded.com.ng/wp-content/uploads/2020/11/teni.jpg",
			title: "The House Of Represntatives Ekiti",
			text:
				"Fayose Bewitched, Enslaved Ekiti People For Four Years – Omotunde ",
		},
		{
			image:
				"https://images.unsplash.com/photo-1634144398231-cb766ddcddab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
			title: "Burna song in biden innuguration",
			text: "the 46 song wey biden wan use enter post, na burna day king am ",
		},
		{
			image:
				"https://images.unsplash.com/photo-1633967305479-457f946f42ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
			title: "Burna song in biden innuguration",
			text:
				"Fayose Bewitched, Enslaved Ekiti People For Four Years – Omotunde ",
		},
	];
	return (
		<section id="politics" className="newssport">
			<h1>
				<span>
					<i class="fas fa-caret-left"></i>
				</span>
				POLITICS
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
                            <img src="https://www.naijaloaded.com.ng/wp-content/uploads/2020/11/teni.jpg" alt=""/>
                        </div>
                        <div className="fayosetext">
                            <div className="title">
                                <h3>Burna song in biden innuguration</h3>
                                <p>the 46 song wey biden wan use enter post, na burna day king am</p>
                            </div>
                        </div>
                    </div> */}

					{/* <div className="fayose">
                        <div className="fayoseimage">
                            <img src="https://pbs.twimg.com/media/ExEi4ruWEAEgQr1?format=jpg&name=900x900" alt=""/>
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
                            <img src="https://pbs.twimg.com/media/ExEi5u7WYAMF_Kh?format=jpg&name=medium" alt=""/>
                        </div>
                        <div className="fayosetext">
                            <div className="title">
                                <h3>Burna song in biden innuguration</h3>
                                <p>Ekiti State: Road plan to be used for speed on illegal sports racing</p>
                            </div>
                        </div>
                    </div> */}

					<div className="fayose">
						<div className="fayoseimage">
							<img
								src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/sale-advert-shopping-discount-promo-table-laptop-promo-code-design-template-0aef6227891580ac84a2f5b6cfc8de76_screen.jpg?ts=1561513027"
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

export default Politics;
