/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import initIsotope from '../../common/initIsotope'

const WorksStyle4 = () => {
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope()
    }, 1000)
  }, [])
  return (
    <section className='portfolio-frl section-padding pb-70' id='portfolio'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-8 col-md-10'>
            <div className='sec-head  text-center'>
              <h6 className='wow fadeIn' data-wow-delay='.5s'>
                Portfolio
              </h6>
              <h3 className='wow color-font'>
                Here are the list of my past projects.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='filtering col-12'>
            <div className='filter wow fadeIn' data-wow-delay='.5s'>
              <span data-filter='*' className='active'>
                All
              </span>
              <span data-filter='.charity'>Charity</span>
              <span data-filter='.environment'>Environment</span>
              <span data-filter='.education'>Education</span>
              <span data-filter='.lifestyle'>Lifestyle</span>
              <span data-filter='.fitness'>Fitness</span>
            </div>
          </div>

          <div className='gallery full-width'>
            {/* Global-Prayer */}
            <div
              className='col-md-6 items graphic lg-mr wow fadeInUp charity education lifestyle'
              data-wow-delay='.4s'
            >
              <div className='item-img'>
                <div className='cont'>
                  <h6>Global Prayer Network </h6>
                  <p>CLick the image to view the website.</p>
                </div>
                <a
                  className='rota'
                  rel='noopener noreferrer'
                  href='//globalprayernetworknjnonprofit.com/'
                  target='_blank'
                >
                  <img
                    src='https://i.ibb.co/1JrWnrG/Global-Prayer.png'
                    alt='Global-Prayer'
                    border='0'
                  />
                  <div className='item-img-overlay'></div>
                </a>
              </div>
            </div>

            {/* ACOMERPR */}
            <div
              className='col-md-6 items graphic lg-mr wow fadeInUp charity environment'
              data-wow-delay='.4s'
            >
              <div className='item-img'>
                <div className='cont'>
                  <h6>ACOMERPR</h6>
                  <p>CLick the image to view the website.</p>
                </div>
                <a
                  className='rota'
                  href='//acomerpr.org'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <img
                    src='https://i.ibb.co/pdkPHV8/Acomper.png'
                    alt='Acomper'
                    border='0'
                  />
                  <div className='item-img-overlay'></div>
                </a>
              </div>
            </div>

            {/* Lakine Hope */}
            <div
              className='col-md-6 items graphic lg-mr wow fadeInUp charity'
              data-wow-delay='.4s'
            >
              <div className='item-img'>
                <div className='cont'>
                  <h6>Lakini Hope Organization</h6>
                  <p>CLick the image to view the website.</p>
                </div>
                <a
                  className='rota'
                  href='//lakinihope.com'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <img
                    src='https://i.ibb.co/LYpPNF6/Lakini-Hope.png'
                    alt='Lakini Hope'
                    border='0'
                  />
                  <div className='item-img-overlay'></div>
                </a>
              </div>
            </div>

            {/* Acminus */}
            <div
              className='col-md-6 items graphic lg-mr wow fadeInUp charity education'
              data-wow-delay='.4s'
            >
              <div className='item-img'>
                <div className='cont'>
                  <h6>Communities Integration Ohio</h6>
                  <p>CLick the image to view the website.</p>
                </div>
                <a
                  className='rota'
                  href='//acminus.com'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <img
                    src='https://i.ibb.co/dKQkdxJ/Acminus.png'
                    alt='Acminus'
                    border='0'
                  />
                  <div className='item-img-overlay'></div>
                </a>
              </div>
            </div>

            {/* Guiding Light Within Your Community INC */}
            <div
              className='col-md-6 items graphic lg-mr wow fadeInUp charity'
              data-wow-delay='.4s'
            >
              <div className='item-img'>
                <div className='cont'>
                  <h6>Guiding Light Within Your Community INC</h6>
                  <p>CLick the image to view the website.</p>
                </div>
                <a
                  className='rota'
                  href='//guidinglightwithinyourcommunity.com'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <img
                    src='https://i.ibb.co/k5HWD3H/Light-Within.png'
                    alt='Guiding Light Within Your Community INC'
                    border='0'
                  />

                  <div className='item-img-overlay'></div>
                </a>
              </div>
            </div>

            {/* Rotary Club of Auburn */}
            <div
              className='col-md-6 items graphic lg-mr wow fadeInUp charity education'
              data-wow-delay='.4s'
            >
              <div className='item-img'>
                <div className='cont'>
                  <h6>Rotary Club of Auburn</h6>
                  <p>CLick the image to view the website.</p>
                </div>
                <a
                  className='rota'
                  rel='noopener noreferrer'
                  href='//auburnrotary.org'
                  target='_blank'
                >
                  <img
                    src='https://i.ibb.co/vjxpgpQ/Rotary-Club.png'
                    alt='Rotary Club of Auburn'
                    border='0'
                  />

                  <div className='item-img-overlay'></div>
                </a>
              </div>
            </div>

            {/* 901bfit */}
            <div
              className='col-md-6 items graphic lg-mr wow fadeInUp charity lifestyle fitness'
              data-wow-delay='.4s'
            >
              <div className='item-img'>
                <div className='cont'>
                  <h6>901bfit</h6>
                  <p>CLick the image to view the website.</p>
                </div>
                <a
                  className='rota'
                  rel='noopener noreferrer'
                  href='//901bfit.org'
                  target='_blank'
                >
                  <img
                    src='https://i.ibb.co/WpgH7Zr/901bfit.png'
                    alt='901bfit'
                    border='0'
                  />

                  <div className='item-img-overlay'></div>
                </a>
              </div>
            </div>

            {/* Student Athletes Rock */}
            <div
              className='col-md-6 items graphic lg-mr wow fadeInUp charity fitness'
              data-wow-delay='.4s'
            >
              <div className='item-img'>
                <div className='cont'>
                  <h6>Student Athletes Rock</h6>
                  <p>CLick the image to view the website.</p>
                </div>
                <a
                  className='rota'
                  rel='noopener noreferrer'
                  href='//studentathletesrock.org'
                  target='_blank'
                >
                  <img
                    src='https://i.ibb.co/Th8JkjM/Student-Athlete.png'
                    alt='Student-Athlete'
                    border='0'
                  />

                  <div className='item-img-overlay'></div>
                </a>
              </div>
            </div>

            {/* Inspirational Lifestyle Coach */}
            <div
              className='col-md-6 items graphic lg-mr wow fadeInUp lifestyle'
              data-wow-delay='.4s'
            >
              <div className='item-img'>
                <div className='cont'>
                  <h6>Inspirational Lifestyle Coach</h6>
                  <p>CLick the image to view the website.</p>
                </div>
                <a
                  className='rota'
                  rel='noopener noreferrer'
                  href='//inspirationallifestylecoach.com'
                  target='_blank'
                >
                  <img
                    src='https://i.ibb.co/GHCTHtF/Lifestyle-Coach.png'
                    alt='Inspirational Lifestyle Coach'
                    border='0'
                  />

                  <div className='item-img-overlay'></div>
                </a>
              </div>
            </div>

            {/* MSP Foundation */}
            <div
              className='col-md-6 items graphic lg-mr wow fadeInUp charity education'
              data-wow-delay='.4s'
            >
              <div className='item-img'>
                <div className='cont'>
                  <h6>MSP Foundation</h6>
                  <p>CLick the image to view the website.</p>
                </div>
                <a
                  className='rota'
                  rel='noopener noreferrer'
                  href='//msp-foundation.org'
                  target='_blank'
                >
                  <img
                    src='https://i.ibb.co/DYCxLSx/Msp-foundation.png'
                    alt='MSP Foundation'
                    border='0'
                  />

                  <div className='item-img-overlay'></div>
                </a>
              </div>
            </div>

            {/* Better Nation School */}
            <div
              className='col-md-6 items graphic lg-mr wow fadeInUp education'
              data-wow-delay='.4s'
            >
              <div className='item-img'>
                <div className='cont'>
                  <h6>Better Nation School</h6>
                  <p>CLick the image to view the website.</p>
                </div>
                <a
                  className='rota'
                  rel='noopener noreferrer'
                  href='//betternationschool.org'
                  target='_blank'
                >
                  <img
                    src='https://i.ibb.co/vckrLdS/Better-nation-school.png'
                    alt='Better Nation School'
                    border='0'
                  />

                  <div className='item-img-overlay'></div>
                </a>
              </div>
            </div>

            {/* African Youth Advocate */}
            <div
              className='col-md-6 items graphic lg-mr wow fadeInUp charity education lifestyle'
              data-wow-delay='.4s'
            >
              <div className='item-img'>
                <div className='cont'>
                  <h6>African Youth Advocate</h6>
                  <p>CLick the image to view the website.</p>
                </div>
                <a
                  className='rota'
                  rel='noopener noreferrer'
                  href='//africanyouthadvocate.org'
                  target='_blank'
                >
                  <img
                    src='https://i.ibb.co/S63RwYm/African-Youth-Advocate.png'
                    alt='African Youth-Advocate'
                    border='0'
                  />

                  <div className='item-img-overlay'></div>
                </a>
              </div>
            </div>

            {/* WGI Productions */}
            <div
              className='col-md-6 items graphic lg-mr wow fadeInUp charity education'
              data-wow-delay='.4s'
            >
              <div className='item-img'>
                <div className='cont'>
                  <h6>WGI Productions</h6>
                  <p>CLick the image to view the website.</p>
                </div>
                <a
                  className='rota'
                  rel='noopener noreferrer'
                  href='//wgiproductions.com'
                  target='_blank'
                >
                  <img
                    src='https://i.ibb.co/FBNvSjV/WGI-Profuction.png'
                    alt='WGI Profuction'
                    border='0'
                  />

                  <div className='item-img-overlay'></div>
                </a>
              </div>
            </div>

            {/* Assured Heart Foundation */}
            <div
              className='col-md-6 items graphic lg-mr wow fadeInUp charity education'
              data-wow-delay='.4s'
            >
              <div className='item-img'>
                <div className='cont'>
                  <h6>Assured Heart Foundation</h6>
                  <p>CLick the image to view the website.</p>
                </div>
                <a
                  className='rota'
                  rel='noopener noreferrer'
                  href='//assuredheartfoundation.com'
                  target='_blank'
                >
                  <img
                    src='https://i.ibb.co/mRrfYYh/Assured.png'
                    alt='Assured Heart Foundation'
                    border='0'
                  />

                  <div className='item-img-overlay'></div>
                </a>
              </div>
            </div>

            {/* Foyer De Berault */}
            <div
              className='col-md-6 items graphic lg-mr wow fadeInUp charity'
              data-wow-delay='.4s'
            >
              <div className='item-img'>
                <div className='cont'>
                  <h6>Foyer De Berault</h6>
                  <p>CLick the image to view the website.</p>
                </div>
                <a
                  className='rota'
                  rel='noopener noreferrer'
                  href='//foyerdeberault.org'
                  target='_blank'
                >
                  <img
                    src='https://i.ibb.co/hZCjH8V/Foyer-D.png'
                    alt='Foyer De Berault'
                    border='0'
                  />

                  <div className='item-img-overlay'></div>
                </a>
              </div>
            </div>

            {/* Relr Design Center */}
            <div
              className='col-md-6 items graphic lg-mr wow fadeInUp'
              data-wow-delay='.4s'
            >
              <div className='item-img'>
                <div className='cont'>
                  <h6>Relr Design Center</h6>
                  <p>CLick the image to view the website.</p>
                </div>
                <a
                  className='rota'
                  rel='noopener noreferrer'
                  href='//elrdesigncenter.com'
                  target='_blank'
                >
                  <img
                    src='https://i.ibb.co/hX5gT63/Relr-Design-Center.png'
                    alt='Relr Design Center'
                    border='0'
                  />

                  <div className='item-img-overlay'></div>
                </a>
              </div>
            </div>

            {/* Kellie FC */}
            <div
              className='col-md-6 items graphic lg-mr wow fadeInUp'
              data-wow-delay='.4s'
            >
              <div className='item-img'>
                <div className='cont'>
                  <h6>Kellie FC</h6>
                  <p>CLick the image to view the website.</p>
                </div>
                <a
                  className='rota'
                  rel='noopener noreferrer'
                  href='//fckellie.co.uk'
                  target='_blank'
                >
                  <img
                    src='https://i.ibb.co/vkB4Lr5/fckellie.png'
                    alt='Kellie FC'
                    border='0'
                  />

                  <div className='item-img-overlay'></div>
                </a>
              </div>
            </div>

            {/* Sponsor a Senior Inc */}
            <div
              className='col-md-6 items graphic lg-mr wow fadeInUp charity lifestyle'
              data-wow-delay='.4s'
            >
              <div className='item-img'>
                <div className='cont'>
                  <h6>Sponsor a Senior Inc</h6>
                  <p>CLick the image to view the website.</p>
                </div>
                <a
                  className='rota'
                  rel='noopener noreferrer'
                  href='//sponsoraseniorinc.org'
                  target='_blank'
                >
                  <img
                    src='https://i.ibb.co/Tw2Ng34/sponsor-a-senior.png'
                    alt='Sponsor a Senior Inc'
                    border='0'
                  />

                  <div className='item-img-overlay'></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorksStyle4
