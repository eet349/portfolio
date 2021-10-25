import React from 'react';

const Home = () => {
	return (
		<div className='hero-background color-light-orange'>
			<div className='hero-content'>
				<h1>
					Hi, my name is{' '}
					<span className='color-strong-orange highlight-word'>Ethan.</span>
				</h1>
				<p>Thanks for stopping by.</p>
				<p>
					Check out my{' '}
					<a href='/portfolio'>
						<span className='CTA-link'>portfolio.</span>
					</a>
				</p>
			</div>
		</div>
	);
};

export default Home;
