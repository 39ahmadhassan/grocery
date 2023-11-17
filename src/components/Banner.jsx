import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import bannerone from './assets/images/banner-one.jpg';
import bannertwo from './assets/images/banner-two.jpg';
import bannerthree from './assets/images/banner-three.jpg'
function Banner() {
  return (
    <>
      <div className="container-fluid">
        <div className="row pt-2">
          <div className="col-md-3">
            <ul className='categories'>
              <li>Groceries & Pets</li>
              <li>Health & Beauty</li>
              <li>Men's Fashion</li>
              <li>Women's Fashion</li>
              <li>Mother & Baby</li>
              <li>Home & Lifestyle</li>
              <li>Electronic Devices</li>
              <li>Electronic Accessories</li>
              <li>TV & Home Appliances</li>
              <li>Sports & Outdoor</li>
              <li>Watches, Bags & Jewellery</li>
              <li>Automotive & Motorbike</li>        
            </ul>
          </div>
          <div className="col-md-9">
            <Carousel data-bs-theme="dark">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={bannerone}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h5>First slide label</h5>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={bannertwo}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h5>Second slide label</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={bannerthree}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h5>Third slide label</h5>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner
