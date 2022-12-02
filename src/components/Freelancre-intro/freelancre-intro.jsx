/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Typewriter from 'typewriter-effect'

const FreelancreIntro = () => {
  return (
    <header className='freelancre valign'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4'>
            <div className='img'>
              <img
                src='https://i.ibb.co/tc5wJXS/hero-profile-280x280.png'
                alt='hero_profile'
              />
            </div>
          </div>
          <div className='col-lg-8 valign'>
            <div className='cont'>
              <h1 className='cd-headline clip'>
                Hello, My name is Fuad Hasan. I love to build websites. I have
                experience in <br />
                <span
                  style={{ fontSize: '35px', lineHeight: '49px' }}
                  className='cd-words-wrapper'
                >
                  <Typewriter
                    options={{
                      wrapperClassName: 'color-font fw-600',
                      strings: [
                        'Web Design',
                        'Web Development',
                        'Wordpress',
                        'Full Stack JS',
                        'Video Editing',
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                    loop={true}
                    onInit={(typewriter) => {
                      typewriter
                    }}
                  />
                </span>
              </h1>
              <button
                type='submit'
                className='butn bord curve mt-30'
                style={{ marginRight: '30px' }}
              >
                <a href='#portfolio'>View Portfolio</a>
              </button>
              <button type='submit' className='nb butn bord curve mt-30'>
                <a
                  href='https://www.fiverr.com/fuad_hasan08'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  Hire Me
                </a>
              </button>
            </div>
          </div>
        </div>

        <div className='states'>
          <div className='container'>
            <ul className='flex'>
              <li className='flex'>
                <div className='numb valign'>
                  <h3>3</h3>
                </div>
                <div className='text valign'>
                  <p>
                    Years <br /> Of Experience
                  </p>
                </div>
              </li>

              <li className='flex'>
                <div className='numb valign'>
                  <h3>80+</h3>
                </div>
                <div className='text valign'>
                  <p>
                    Projects Completed <br /> In 12 Countries
                  </p>
                </div>
              </li>

              <li className='mail-us'>
                <a
                  href='https://www.fiverr.com/fuad_hasan08'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <div className='flex'>
                    <div className='text valign'>
                      <div className='full-width'>
                        <p>Find me in Fiverr</p>
                        <h6>fiverr.com/fuad_hasan08</h6>
                      </div>
                    </div>
                    <div className='mail-icon'>
                      <div className='icon-box'>
                        <span className='icon color-font pe-7s-link'></span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='line bottom left'></div>
    </header>
  )
}

export default FreelancreIntro
