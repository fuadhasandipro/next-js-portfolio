/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

class FullTestimonials extends React.Component {
  constructor(props) {
    super(props)
  }
  renderArrows = () => {
    return (
      <div className='arrows'>
        <div className='container'>
          <div
            onClick={() => this.slider.slickNext()}
            className='next cursor-pointer'
          >
            <span className='pe-7s-angle-right'></span>
          </div>
          <div
            onClick={() => this.slider.slickPrev()}
            className='prev cursor-pointer'
          >
            <span className='pe-7s-angle-left'></span>
          </div>
        </div>
      </div>
    )
  }
  render() {
    return (
      <section
        className={`testimonials ${
          this.props.withIMG
            ? 'section-padding bg-img'
            : this.props.withCOLOR
            ? 'section-padding back-color'
            : this.props.noPadding
            ? ''
            : 'section-padding'
        } ${this.props.classText ? this.props.classText : ''}`}
        id='testimonials'
        style={{
          backgroundImage: `${
            this.props.withIMG ? 'url(/img/testim-img.jpg)' : 'none'
          }`,
        }}
      >
        {this.props.showHead && (
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-8 col-md-10'>
                <div className='sec-head  text-center'>
                  <h6 className='wow fadeIn' data-wow-delay='.5s'>
                    Testimonials
                  </h6>
                  <h3 className='wow color-font'>
                    I love my clients from all over the world.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className='container-fluid position-re'>
          <div className='row wow fadeInUp' data-wow-delay='.5s'>
            <div className='col-lg-12'>
              <Slider
                className='slic-item'
                {...{
                  ref: (c) => (this.slider = c),
                  dots: false,
                  infinite: true,
                  arrows: true,
                  centerMode: true,
                  autoplay: true,
                  rows: 1,
                  slidesToScroll: 1,
                  slidesToShow: 3,
                  responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 1,
                        centerMode: false,
                      },
                    },
                    {
                      breakpoint: 767,
                      settings: {
                        slidesToShow: 1,
                        centerMode: false,
                      },
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                        centerMode: false,
                      },
                    },
                  ],
                }}
              >
                <div className='item'>
                  <div className='info valign'>
                    <div className='cont'>
                      <div className='author'>
                        <div className='img'>
                          <img
                            src='https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/1379712/original/smiley-face-thumbs-up-cartoon-yTkeza64c.png'
                            alt=''
                          />
                        </div>
                        <h6 className='author-name color-font'>ellablaine</h6>
                        <span className='author-details'>United States</span>
                      </div>
                    </div>
                  </div>
                  <p>
                    If you are looking for a website look no further. highly
                    highly recommend this seller. I've had several created. fast
                    and reliable.
                  </p>
                </div>
                <div className='item'>
                  <div className='info valign'>
                    <div className='cont'>
                      <div className='author'>
                        <div className='img'>
                          <img
                            src='https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=170667a&w=0&h=BBXhuO36-UfqMS5aYkYvqjAuz3bO1GW-wiXGqRD1Sng='
                            alt=''
                          />
                        </div>
                        <h6 className='author-name color-font'>rjberryhill</h6>
                        <span className='author-details'>United Kingdom</span>
                      </div>
                    </div>
                  </div>
                  <p>
                    fuad_hasan08 is one of the best Website Designers that I
                    have worked with. He is very intelligent, competent and
                    patient with the customer and the needs of the customer. He
                    designed a highly professional Non-Profit Website for our
                    organization. I give me highest recommendations to use the
                    services of fuad_hasan08! I definitely will use his services
                    and talents on another project! Bob
                  </p>
                </div>
                <div className='item'>
                  <div className='info valign'>
                    <div className='cont'>
                      <div className='author'>
                        <div className='img'>
                          <img
                            src='https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=170667a&w=0&h=BBXhuO36-UfqMS5aYkYvqjAuz3bO1GW-wiXGqRD1Sng='
                            alt=''
                          />
                        </div>
                        <h6 className='author-name color-font'>newsons</h6>
                        <span className='author-details'>United States</span>
                      </div>
                    </div>
                  </div>
                  <p>
                    Excellent Customer Service. His design was perfect. Fast
                    delivery. I will use seller again Highly Recommended!
                  </p>
                </div>
                <div className='item'>
                  <div className='info valign'>
                    <div className='cont'>
                      <div className='author'>
                        <div className='img'>
                          <img
                            src='https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=170667a&w=0&h=BBXhuO36-UfqMS5aYkYvqjAuz3bO1GW-wiXGqRD1Sng='
                            alt=''
                          />
                        </div>
                        <h6 className='author-name color-font'>kellyargant</h6>
                        <span className='author-details'>United States</span>
                      </div>
                    </div>
                  </div>
                  <p>
                    very good professional with great communication. He knows
                    what he's doing and has good advice to help you with your
                    project. I highly recommend this young professional. I will
                    hire him again.
                  </p>
                </div>
                <div className='item'>
                  <div className='info valign'>
                    <div className='cont'>
                      <div className='author'>
                        <div className='img'>
                          <img
                            src='https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=170667a&w=0&h=BBXhuO36-UfqMS5aYkYvqjAuz3bO1GW-wiXGqRD1Sng='
                            alt=''
                          />
                        </div>
                        <h6 className='author-name color-font'>
                          trenacejosiah
                        </h6>
                        <span className='author-details'>United States</span>
                      </div>
                    </div>
                  </div>
                  <p>
                    He is truly special! Amazing work and not trying to rob
                    individuals who are trying to help people through the non
                    profit. Some sellers are over priced and it’s a shame.
                  </p>
                </div>
                <div className='item'>
                  <div className='info valign'>
                    <div className='cont'>
                      <div className='author'>
                        <div className='img'>
                          <img
                            src='https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/ac11a7bb92d2fc79bcc340d7442c025e-1646491796858/b8f453c9-3dc1-44e7-a4df-b6073614a53a.jpg'
                            alt=''
                          />
                        </div>
                        <h6 className='author-name color-font'>
                          trenacejosiah
                        </h6>
                        <span className='author-details'>United States</span>
                      </div>
                    </div>
                  </div>
                  <p>
                    Excellent. Quality delivery. Seller is very patient and
                    great communications. I highly recommend his services.
                  </p>
                </div>
                <div className='item'>
                  <div className='info valign'>
                    <div className='cont'>
                      <div className='author'>
                        <div className='img'>
                          <img
                            src='https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/1379712/original/smiley-face-thumbs-up-cartoon-yTkeza64c.png'
                            alt=''
                          />
                        </div>
                        <h6 className='author-name color-font'>ellablaine</h6>
                        <span className='author-details'>United States</span>
                      </div>
                    </div>
                  </div>
                  <p>
                    Thank you for another great product. I highly recommend the
                    Seller for all your website designs. Now, working on my 3rd
                    website.
                  </p>
                </div>
                <div className='item'>
                  <div className='info valign'>
                    <div className='cont'>
                      <div className='author'>
                        <div className='img'>
                          <img
                            src='https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=170667a&w=0&h=BBXhuO36-UfqMS5aYkYvqjAuz3bO1GW-wiXGqRD1Sng='
                            alt=''
                          />
                        </div>
                        <h6 className='author-name color-font'>
                          pierreconille
                        </h6>
                        <span className='author-details'>United States</span>
                      </div>
                    </div>
                  </div>
                  <p>
                    The seller exceeded my expectations, he delivered fast and
                    is easy to communicate. I strongly recommend him for any web
                    work. I will certainly be working with him again. Well done!
                  </p>
                </div>
                <div className='item'>
                  <div className='info valign'>
                    <div className='cont'>
                      <div className='author'>
                        <div className='img'>
                          <img
                            src='https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/582382457099fe0527db9f9624f044b7-1628016241190/8826e24c-0200-43ac-821d-4a54d38cd9e1.JPG'
                            alt=''
                          />
                        </div>
                        <h6 className='author-name color-font'>
                          ericmilam1977
                        </h6>
                        <span className='author-details'>United States</span>
                      </div>
                    </div>
                  </div>
                  <p>
                    I have worked with him several times, and each time the work
                    is stellar. Everything I want comes to life. I would not
                    have gone with anyone else. And I will come back again for
                    future projects.
                  </p>
                </div>
                <div className='item'>
                  <div className='info valign'>
                    <div className='cont'>
                      <div className='author'>
                        <div className='img'>
                          <img
                            src='https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=170667a&w=0&h=BBXhuO36-UfqMS5aYkYvqjAuz3bO1GW-wiXGqRD1Sng='
                            alt=''
                          />
                        </div>
                        <h6 className='author-name color-font'>pipsonflash</h6>
                        <span className='author-details'>United States</span>
                      </div>
                    </div>
                  </div>
                  <p>
                    Fuad works fast and is a great communicator. Once you have
                    all your content ready, he will get to work to make a great
                    looking website for you. I am impressed with his
                    responsiveness and willingness to make changes every time I
                    requested. He also gives good recommendation on somethings.
                    I'll definitely work with Fuad in the future. I highly
                    recommend him.
                  </p>
                </div>
                <div className='item'>
                  <div className='info valign'>
                    <div className='cont'>
                      <div className='author'>
                        <div className='img'>
                          <img
                            src='https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/1379712/original/smiley-face-thumbs-up-cartoon-yTkeza64c.png'
                            alt=''
                          />
                        </div>
                        <h6 className='author-name color-font'>ellablaine</h6>
                        <span className='author-details'>United States</span>
                      </div>
                    </div>
                  </div>
                  <p>
                    Thank you again for being super patient with me; I truly
                    appreciate it. If you are looking for someone to create a
                    knowledgeable and affordable website, don't hesitate to
                    order his gig. I will definitely be ordering again.
                  </p>
                </div>
                <div className='item'>
                  <div className='info valign'>
                    <div className='cont'>
                      <div className='author'>
                        <div className='img'>
                          <img
                            src='https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=170667a&w=0&h=BBXhuO36-UfqMS5aYkYvqjAuz3bO1GW-wiXGqRD1Sng='
                            alt=''
                          />
                        </div>
                        <h6 className='author-name color-font'>digiarts</h6>
                        <span className='author-details'>United Kingdom</span>
                      </div>
                    </div>
                  </div>
                  <p>
                    Very good experience. Seller communicated well and was
                    always helpful.
                  </p>
                </div>
                <div className='item'>
                  <div className='info valign'>
                    <div className='cont'>
                      <div className='author'>
                        <div className='img'>
                          <img
                            src='https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/a04578e1567f68806b1af247b1501739-1584117765126/55806c08-5de6-4bdf-8b6b-57884a1bef75.JPG'
                            alt=''
                          />
                        </div>
                        <h6 className='author-name color-font'>pretynana</h6>
                        <span className='author-details'>Haiti</span>
                      </div>
                    </div>
                  </div>
                  <p>
                    Work is amazing! Fuad is very comprehensive, respond very
                    fast and ready to make any changes you’ll like till you
                    satisfied. I really loved working with him. I will totally
                    recommend him. And if there’s anything I’ll order with him
                    again
                  </p>
                </div>
                <div className='item'>
                  <div className='info valign'>
                    <div className='cont'>
                      <div className='author'>
                        <div className='img'>
                          <img
                            src='https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=170667a&w=0&h=BBXhuO36-UfqMS5aYkYvqjAuz3bO1GW-wiXGqRD1Sng='
                            alt=''
                          />
                        </div>
                        <h6 className='author-name color-font'>kujiweza</h6>
                        <span className='author-details'>United States</span>
                      </div>
                    </div>
                  </div>
                  <p>
                    Working with this seller was wonderful. He was patient and
                    easy to work with. There were difficulties getting
                    information and access available. Once we received
                    information he immediately began to work and created an
                    excellent site. I highly recommend this seller.
                  </p>
                </div>
                <div className='item'>
                  <div className='info valign'>
                    <div className='cont'>
                      <div className='author'>
                        <div className='img'>
                          <img
                            src='https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=170667a&w=0&h=BBXhuO36-UfqMS5aYkYvqjAuz3bO1GW-wiXGqRD1Sng='
                            alt=''
                          />
                        </div>
                        <h6 className='author-name color-font'>whoanaturals</h6>
                        <span className='author-details'>United States</span>
                      </div>
                    </div>
                  </div>
                  <p>
                    Fuad, is an incredible professional. Even when I had a few
                    delays in getting him the information and content that he
                    needed, he still completed the project on time and exceeded
                    my expectations. You will not be disappointed! Thank you
                    Fuad!
                  </p>
                </div>
                <div className='item'>
                  <div className='info valign'>
                    <div className='cont'>
                      <div className='author'>
                        <div className='img'>
                          <img
                            src='https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=170667a&w=0&h=BBXhuO36-UfqMS5aYkYvqjAuz3bO1GW-wiXGqRD1Sng='
                            alt=''
                          />
                        </div>
                        <h6 className='author-name color-font'>
                          altimatesteam
                        </h6>
                        <span className='author-details'>Costa Rica</span>
                      </div>
                    </div>
                  </div>
                  <p>
                    This was a fantastic experience I wasn't quite sure about
                    what I wanted but swiftly and smoothly taken to the
                    destination I wanted will definitely be using this guy again
                  </p>
                </div>
              </Slider>
            </div>
          </div>
          {this.renderArrows()}
        </div>
      </section>
    )
  }
}

export default FullTestimonials
