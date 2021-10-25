import React from 'react';

/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
const Contact = () => {
	return (
		<>
			<h1 className='page-header'>CONTACT ME</h1>
			<h2 className='page-subheader'>Get in touch with me today.</h2>
			<div className='background-gray color-light-orange contact-container'>
				<div className='md:grid md:grid-cols-2 md:gap-6'>
					<div className='mt-5 md:mt-0 md:col-span-2'>
						<form action='#' method='POST'>
							<div className=' sm:rounded-md sm:overflow-hidden'>
								<div
									className='px-4 py-5
                  space-y-6 sm:p-6'
								>
									<div className='grid grid-cols-3 gap-6'>
										<div className='col-span-3 sm:col-span-2'></div>
									</div>
									<div className='grid grid-cols-6 gap-6'>
										<div className='col-span-6 sm:col-span-4'>
											<label
												htmlFor='email-address'
												className='block text-sm font-medium color-light-orange'
											>
												Your Name
											</label>
											<input
												type='text'
												name='name'
												id='name'
												autoComplete='name'
												className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md color-black p-3'
											/>
										</div>
										<div className='col-span-6 sm:col-span-4'>
											<label
												htmlFor='email-address'
												className='block text-sm font-medium color-light-orange'
											>
												Your Email
											</label>
											<input
												type='text'
												name='email-address'
												id='email-address'
												autoComplete='email'
												className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md color-black p-3'
											/>
										</div>
									</div>
									<div>
										<div className='mt-1'>
											<label
												htmlFor='first-name'
												className='block text-sm font-medium color-light-orange'
											>
												Your Message
												<textarea
													id='about'
													name='about'
													rows={3}
													className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-3 color-black'
													placeholder='Leave a Message'
													defaultValue={''}
												/>
											</label>
										</div>
									</div>

									<div></div>
								</div>
								<div className='px-4 py-1 text-left sm:px-6 '>
									<button
										type='submit'
										className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md color-black background-orange submit-button focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
									>
										Send Message
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
