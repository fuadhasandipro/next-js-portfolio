import React from 'react'
import Split from '../Split'
import Link from 'next/link'

const CallToAction = ({ img }) => {
  return (
    <section
      className='call-action section-padding sub-bg bg-img'
      id='letsTalk'
      style={{ backgroundImage: `url(${img ? img : '/img/patrn.svg'})` }}
    >
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 col-lg-9'>
            <div className='content sm-mb30'>
              <Split>
                <h6 className='wow words chars splitting' data-splitting>
                  Let's Talk
                </h6>
                <h2 className='wow words chars splitting' data-splitting>
                  about your <br /> <b className='back-color'>next project</b>.
                </h2>
              </Split>
            </div>
          </div>

          <div className='col-md-4 col-lg-3 valign'>
            <button type='submit' className='butn bord curve mt-30'>
              <a
                href='https://www.fiverr.com/fuad_hasan08'
                rel='noopener noreferrer'
                target='_blank'
              >
                Get In Touch
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
