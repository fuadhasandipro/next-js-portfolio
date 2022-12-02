/* eslint-disable @next/next/no-img-element */
import React from 'react'
import aboutSkillsProgress from '../../common/aboutSkillsProgress'

const AboutUs5 = () => {
  React.useEffect(() => {
    aboutSkillsProgress(
      document.querySelector('.about-cr .skills-box'),
      document.querySelectorAll('.skill-progress .progres'),
      document.querySelector('.about-cr')
    )
  }, [])
  return (
    <section className='about-cr' id='aboutMe'>
      <div className='container-fluid'>
        <div className='row align-items-center'>
          <div className='col-lg-6 img md-mb50'>
            <img src='https://i.ibb.co/0X9tLJK/abt.png' alt='' />
          </div>
          <div className='col-lg-5 valign'>
            <div className='cont full-width'>
              <h3 className='color-font'>About Me</h3>
              <h5 className='co-tit mb-15'>
                Web Developer and Wordpress Expert.
              </h5>
              <p>
                I am Fuad Hasan, a skilled Web developer and WordPress expert
                with the experience of 3 years. I'm currently level 2 seller in
                Fiverr. I've completed over 80+ projects in Fiverr. I also have
                experience in server side Javascript.
              </p>
              <br />
              <p>
                I'm committed to delivering you the best services I can. Please
                feel free to contact me with your project in Fiverr. Thank You
              </p>
              <button type='submit' className='butn bord curve mt-30'>
                <a
                  href='https://www.fiverr.com/fuad_hasan08'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  Hire Me in Fiverr
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs5
