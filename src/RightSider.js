import React from 'react';
import { NavLink } from 'react-router-dom';

const RightSider = () => {
	return (
		<div className='right-sider-container'>
			<div className='sider color-light-orange'>
				<ul className='circle-link-container'>
					<li>
						<NavLink exact activeClassName='active-link' to='/'>
							<span className='circle'></span>
						</NavLink>
					</li>
					<li>
						<NavLink exact activeClassName='active-link' to='/resume'>
							<span className='circle'></span>
						</NavLink>
					</li>
					<li>
						<NavLink exact activeClassName='active-link' to='/portfolio'>
							<span className='circle'></span>
						</NavLink>
					</li>
					<li>
						<NavLink exact activeClassName='active-link' to='/contact'>
							<span className='circle'></span>
						</NavLink>
					</li>
					<li>
						<NavLink exact activeClassName='active-link' to='/about'>
							<span className='circle'></span>
						</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default RightSider;
