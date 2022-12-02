/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import appData from '../../data/app.json'

const Footer = ({ hideBGCOLOR }) => {
  return (
    <footer className={`${!hideBGCOLOR ? 'sub-bg' : ''}`}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4'>
            <div className='item'>
              <div className='logo'>
                <img src={appData.lightLogo} alt='' />
              </div>
              <div className='copy-right'>
                <p>
                  © 2022, Fuad Hasan. Made by
                  <Link href='https://www.fiverr.com/fuad_hasan08'>
                    <a target='_blank'>Fuad Hasan</a>
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
