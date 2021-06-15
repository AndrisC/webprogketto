import React from 'react';
import '../style/Home.css';

export default function Home() {
    return (
        <div id="content">
          <div className="expanding-info-box">
            <div className="info-container">
              <div className="title">
                <h2>Welcome to the Hero collection!</h2>
              </div>

              <div className="page-desc-wrapper">
                <div className="page-desc">
                  <p>Explore our page!</p>
                  <ul>
                    <li>Browse & search for your favorite superheros.</li>
                    <li>View a detailed description of any superhero.</li>
                    <li>Became a Hero yourself and create one!</li>
                  </ul>
                </div>

                <div className="api-ref">
                  <span>Check out the API we used:</span>
                  <a href="https://superheroapi.com" target="_blank">https://superheroapi.com/</a>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}
