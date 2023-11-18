/* eslint-disable @next/next/no-img-element */
import React from 'react'
import initIsotope from '../../common/initIsotope'

const portfolioData = [
  {
    id: 1,
    title: 'Superhero Kids Foundation INC',
    url: '//superherokidsfoundationinc.org/',
    thumb: 'https://i.ibb.co/K09MZk2/superherokids.jpg',
    cat: 'charity education',
  },
  {
    id: 2,
    title: 'ACOMERPR',
    url: '//acomerpr.org',
    thumb: 'https://i.ibb.co/pdkPHV8/Acomper.png',
    cat: 'charity environment',
  },
  {
    id: 22,
    title: 'TheKendey Charity Foundation',
    url: '//www.thekendeyfoundation.org/',
    thumb: 'https://i.ibb.co/GMngPk6/thekendey.jpg',
    cat: 'charity',
  },
  {
    id: 33,
    title: 'Usigo - Golf, Fellowship, Community',
    url: '//usigo.org',
    thumb: 'https://i.ibb.co/QHtxNKb/usigo.jpg',
    cat: 'charity fitness',
  },
  {
    id: 44,
    title: 'Fraternity Health and Wellness',
    url: '//fraternityhealthandwellness.org',
    thumb: 'https://i.ibb.co/2FzqWQ2/fratenity.jpg',
    cat: 'charity fitness',
  },
  {
    id: 3,
    title: 'Lakini Hope Organization',
    url: '//lakinihope.com',
    thumb: 'https://i.ibb.co/LYpPNF6/Lakini-Hope.png',
    cat: 'charity',
  },
  {
    id: 6,
    title: 'Rotary Club of Auburn',
    url: '//auburnrotary.org',
    thumb: 'https://i.ibb.co/vjxpgpQ/Rotary-Club.png',
    cat: 'charity education',
  },
  {
    id: 7,
    title: '901bfit',
    url: '//901bfit.org',
    thumb: 'https://i.ibb.co/WpgH7Zr/901bfit.png',
    cat: 'charity lifestyle fitness',
  },
  {
    id: 8,
    title: 'Student Athletes Rock',
    url: '//studentathletesrock.org',
    thumb: 'https://i.ibb.co/Th8JkjM/Student-Athlete.png',
    cat: 'charity fitness',
  },
  {
    id: 10,
    title: 'MSP Foundation',
    url: '//msp-foundation.org',
    thumb: 'https://i.ibb.co/DYCxLSx/Msp-foundation.png',
    cat: 'charity education',
  },
  {
    id: 11,
    title: 'Better Nation School',
    url: '//betternationschool.org',
    thumb: 'https://i.ibb.co/vckrLdS/Better-nation-school.png',
    cat: 'education',
  },
  {
    id: 12,
    title: 'African Youth Advocate',
    url: '//africanyouthadvocate.org',
    thumb: 'https://i.ibb.co/S63RwYm/African-Youth-Advocate.png',
    cat: 'charity education lifestyle',
  },
  {
    id: 13,
    title: 'WGI Productions',
    url: '//wgiproductions.com',
    thumb: 'https://i.ibb.co/FBNvSjV/WGI-Profuction.png',
    cat: 'charity education',
  },
  {
    id: 14,
    title: 'Assured Heart Foundation',
    url: 'http://assuredheartfoundation.com',
    thumb: 'https://i.ibb.co/mRrfYYh/Assured.png',
    cat: 'charity education',
  },
  {
    id: 15,
    title: 'Foyer De Berault',
    url: 'http://foyerdeberault.org/',
    thumb: 'https://i.ibb.co/hZCjH8V/Foyer-D.png',
    cat: 'charity',
  },
  {
    id: 18,
    title: 'Sponsor a Senior Inc',
    url: '//sponsoraseniorinc.org',
    thumb: 'https://i.ibb.co/Tw2Ng34/sponsor-a-senior.png',
    cat: 'charity lifestyle',
  },
]

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
            {portfolioData.map((item, idx) => {
              const { id, title, url, thumb, cat } = item

              return (
                <div
                  className={`col-md-6 items graphic lg-mr wow fadeInUp ${cat}`}
                  data-wow-delay='.4s'
                  key={id}
                >
                  <div className='item-img'>
                    <div className='cont'>
                      <h6>{title}</h6>
                      <p>CLick the image to view the website.</p>
                    </div>
                    <a
                      className='rota'
                      rel='noopener noreferrer'
                      href={url}
                      target='_blank'
                    >
                      <img src={thumb} alt={title} border='0' />
                      <div className='item-img-overlay'></div>
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorksStyle4
