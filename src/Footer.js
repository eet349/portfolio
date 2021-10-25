import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer-container'>
				<NavLink
					exact
					activeClassName='active-link'
					to='/'
					className='footer-link'
				>
					<span>HOME</span>
				</NavLink>
				<NavLink
					exact
					activeClassName='active-link'
					to='/resume'
					className='footer-link'
				>
					<span>RESUME</span>
				</NavLink>
				<NavLink
					exact
					activeClassName='active-link'
					to='/portfolio'
					className='footer-link'
				>
					<span>PORTFOLIO</span>
				</NavLink>
				<NavLink
					exact
					activeClassName='active-link'
					to='/contact'
					className='footer-link'
				>
					<span>CONTACT</span>
				</NavLink>
				<NavLink
					exact
					activeClassName='active-link'
					to='/about'
					className='footer-link'
				>
					<span>ABOUT</span>
				</NavLink>
			</div>
		</div>
	);
};

export default Footer;
