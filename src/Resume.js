import React from 'react';

const Resume = () => {
	return (
		<div>
			<h1 className='page-header'>Resume</h1>
			<h2 className='page-subheader'>Education & Experience </h2>
			<div className='resume-container'>
				<div className='resume-left'>
					<div className='resume-row'>
						<h4 className='resume-title'>Education</h4>
						<ul>
							<li>
								<div className='resume-item'>
									<div className='resume-head'>
										<div className='el-icon'>
											<span className='el-icon-icon ti-crown'></span>
										</div>
										<h5>Art University</h5>
										<h6>Art Director Course | New York</h6>
									</div>
									<div className='resume-body'>
										<p>
											Nulla consequat massa quis enim. Donec pede justo,
											fringilla vel, aliquet nec, vulputate eget, arcu. In enim
											justo.
										</p>
									</div>
								</div>
							</li>
							<li>
								<div className='resume-item'>
									<div className='resume-head'>
										<div className='el-icon'>
											<span className='el-icon-icon ti-cup'></span>
										</div>
										<h5>Royal Holloway</h5>
										<h6>Bachelor Degree | London</h6>
									</div>
									<div className='resume-body'>
										<p>
											Nulla consequat massa quis enim. Donec pede justo,
											fringilla vel, aliquet nec, vulputate eget, arcu. In enim
											justo.
										</p>
									</div>
								</div>
							</li>
							<li>
								<div className='resume-item'>
									<div className='resume-head'>
										<div className='el-icon'>
											<span className='el-icon-icon ti-ruler-alt-2'></span>
										</div>
										<h5>Stanford University</h5>
										<h6>Web Design Course | New York</h6>
									</div>
									<div className='resume-body'>
										<p>
											Nulla consequat massa quis enim. Donec pede justo,
											fringilla vel, aliquet nec, vulputate eget, arcu. In enim
											justo.
										</p>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div className='resume-right'>
					<div className='resume-row'>
						<h4 className='resume-title'>Experience</h4>
						<ul>
							<li>
								<div className='resume-item'>
									<div className='resume-head'>
										<div className='el-icon'>
											<span className='el-icon-icon ti-pencil-alt'></span>
										</div>
										<h5>UI/UX Designer</h5>
										<h6>
											Google INC | New York <small>(2016-2018)</small>
										</h6>
									</div>
									<div className='resume-body'>
										<p>
											Nulla consequat massa quis enim. Donec pede justo,
											fringilla vel, aliquet nec, vulputate eget, arcu. In enim
											justo.
										</p>
									</div>
								</div>
							</li>
							<li>
								<div className='resume-item'>
									<div className='resume-head'>
										<div className='el-icon'>
											<span className='el-icon-icon ti-heart'></span>
										</div>
										<h5>Front-End Developer</h5>
										<h6>
											Amazon INC | New York <small>(2016-2018)</small>
										</h6>
									</div>
									<div className='resume-body'>
										<p>
											Nulla consequat massa quis enim. Donec pede justo,
											fringilla vel, aliquet nec, vulputate eget, arcu. In enim
											justo.
										</p>
									</div>
								</div>
							</li>
							<li>
								<div className='resume-item'>
									<div className='resume-head'>
										<div className='el-icon'>
											<span className='el-icon-icon ti-paint-bucket'></span>
										</div>
										<h5>Back-End Developer</h5>
										<h6>
											Facebook INC | New York <small>(2016-2018)</small>
										</h6>
									</div>
									<div className='resume-body'>
										<p>
											Nulla consequat massa quis enim. Donec pede justo,
											fringilla vel, aliquet nec, vulputate eget, arcu. In enim
											justo.
										</p>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Resume;
