import React from 'react';
import '../style/home.css';

export default function Home() {
    return (
        <div id="content">
          <div class="expanding-info-box">
            <div class="info-container">
              <div class="title">
                <h2>Welcome to the Hero collection!</h2>
              </div>

              <div class="page-desc-wrapper">
                <div class="page-desc">
                  <p>Explore our page!</p>
                  <ul>
                    <li>Browse & search for your favorite superheros.</li>
                    <li>View a detailed description of any superhero.</li>
                    <li>Became a Hero yourself and create one!</li>
                  </ul>
                </div>

                <div class="api-ref">
                  <span>Check out the API we used:</span>
                  <a href="https://superheroapi.com" target="_blank">https://superheroapi.com/</a>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}
