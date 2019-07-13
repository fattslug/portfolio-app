import React from 'react';

import './HomePage.scss';

export default function HomePage() {
  return (
    <div className='homepage'>
      <div className='homepage-content'>
        <div className='profile-photo'>
          <div className='profile-photo__circle-crop'>
            <img src='images/profile.jpg' alt='me crossing my arms in SFO airport' />
          </div>
        </div>
        <div className='profile-name'>
          <h1 className='font--light'>Sean Powell</h1>
          <h2 className='font--allcaps'>Full Stack Engineer</h2>
        </div>
        <div className='profile-description'>
          <h3 className='font--roboto font--normal'>
            Making cool stuff that looks good because it's fun.
          </h3>
        </div>
        <div className='profile-location'>
          <h4><a href='https://seanpowell.dev/'>Toronto, ON, Canada</a></h4>
          <h4><a href='https://seanpowell.dev/'>San Jose, CA, USA</a></h4>
        </div>
      </div>
    </div>
  );
}