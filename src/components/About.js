import React from 'react'
import Footer from './Footer'

export default function About() {
  return (
    <>
      <div className="text-center" style={{backgroundColor:'#f8f9fa',padding:'50px'}}>
        <h1>About Us</h1>
      <p className="lead">We are passionate about providing high quality products and services to out customers.</p>  
      </div>
      <div className="container text-center py-4">
        <h2>Our Mission</h2>
        <p className="lead"> Our Mission is to create products that improves the lives of our customers.</p>
      </div>
      <div className="container text-center py-4" style={{backgroundColor:'#e9ecef'}}>
        <h2>Our Story</h2>
        <p className="lead">Founded in 2020,BrandName started as a small startup with a big vision.
          Over the years ,we have grown into a recognized name in the industry,delivering products that stand out for their
          quality and reliability.
        </p>
      </div>
      <div className='container text-center py-4'>
        <h2>Meet the Teams</h2>
      
        <div className="row">
          <div className="col-md-4">

          <div class="card" >
              <img src="./assests/person1.jfif" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">John Michale</h5>
                <p class="card-text">CEO</p>
               
              </div>
        </div>
          </div>
          <div className="col-md-4">
          <div class="card" >
              <img src="./assests/person1.jfif" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">John Michale</h5>
                <p class="card-text">CEO</p>
               
              </div>
        </div>
          </div>
          <div className="col-md-4">
          <div class="card" >
              <img src="./assests/person1.jfif" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">John Michale</h5>
                <p class="card-text">CEO</p>
               
              </div>
        </div>
          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}
