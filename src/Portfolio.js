import React from 'react';

const Portfolio = () => {
	return (
		<div className='portfolio-page'>
			<h1 className='page-header'>Portfolio</h1>
			<h2 className='page-subheader'>Let's see my work</h2>
			<div className='card-container'>
				<div className='card'>
					<div className='proj-img-1 card-gif'></div>
					<div className='more-content'>
						<div className='card-content-title'>
							<h3 className='card-title'>Multiplayer Mini-games</h3>
							<h4 className='card-subtitle'>
								React.js | Redux | Node.js | Express.js | Socket.io
							</h4>
						</div>
						<p className='card-description'>
							You can create and join multiplayer rooms to play mini-games and
							chat with other people.
						</p>
					</div>
				</div>
				<div className='card'>
					<div className='proj-img-2 card-gif'></div>
					<div className='more-content'>
						<div className='card-content-title'>
							<h3 className='card-title'>
								Boy's & Girl's Club Sentiment Tracker Backend
							</h3>
							<h4 className='card-subtitle'>
								Java | Spring Framework | PostgreSQL | OKTA Auth | Figma |
								Trello
							</h4>
						</div>
						<p className='card-description'>
							Boy's & Girl's Club sentiment tracker. Tracks members'
							satisfaction with the club.
						</p>
					</div>
				</div>
				<div className='card'>
					<div className='proj-img-3 card-gif'></div>
					<div className='more-content'>
						<div className='card-content-title'>
							<h3 className='card-title'>Arbitrary Board Game Randomizer</h3>
							<h4 className='card-subtitle'>
								React.js | Java | Spring Framework | PostgreSQL | XML | Figma
							</h4>
						</div>
						<p className='card-description'>
							Keep track of the board games in your collection. Then on game
							night, generate a random game from your collection that fits your
							game night needs.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
