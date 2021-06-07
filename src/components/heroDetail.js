import React, {useState, useEffect} from 'react';
import '../style/HeroDetail.css';
import ReactDOM from "react-dom";

class HeroDetail extends React.Component {
    render() {
      return (
        <div>
          <div className="hero-details-container">
            <div className="hero-details-modal">

              <div className="img-container">
                <img src={this.props.hero.image.url} alt="" />
                <h1>{this.props.hero.name}</h1>
              </div>
              <div className="details-container">
                <div className="details-left">
                  <div className="details-appearance details">
                    <h2>Appearance</h2>
                    <div className="one-detail">
                      <span>Gender:</span><h3>{this.props.hero.appearance.gender}</h3>
                    </div>
                    <div className="one-detail">
                      <span>Height:</span><h3>{this.props.hero.appearance.height[0]} / {this.props.hero.appearance.height[1]}</h3>
                    </div>
                    <div className="one-detail">
                      <span>Race:</span><h3>{this.props.hero.appearance.race}</h3>
                    </div>
                    <div className="one-detail">
                      <span>Eye-color:</span><h3>{this.props.hero.appearance[`eye-color`]}</h3>
                    </div>
                    <div className="one-detail">
                      <span>Hair-color:</span><h3>{this.props.hero.appearance[`hair-color`]}</h3>
                    </div>
                  </div>

                  <div className="details-powerstats details">
                    <h2>Powerstats</h2>
                    <div className="one-detail">
                      <span>Intelligence:</span>
                      <h3>{this.props.hero.powerstats.intelligence}</h3>
                    </div>
                    <div className="one-detail">
                      <span>Power:</span><h3>{this.props.hero.powerstats.power}</h3>
                    </div>
                    <div className="one-detail">
                      <span>Speed:</span><h3>{this.props.hero.powerstats.speed}</h3>
                    </div>
                    <div className="one-detail">
                      <span>Strength:</span><h3>{this.props.hero.powerstats.strength}</h3>
                    </div>
                    <div className="one-detail">
                      <span>Combat:</span><h3>{this.props.hero.powerstats.combat}</h3>
                    </div>
                  </div>
                </div>

                <div className="details-biography details">
                  <h2>Biography</h2>
                  <div className="one-detail detail-column">
                    <span>Alignment:</span><h3>{this.props.hero.biography.alignment}</h3>
                  </div>
                  <div className="one-detail detail-column">
                    <span>Publisher:</span><h3>{this.props.hero.biography.publisher}</h3>
                  </div>
                  <div className="one-detail detail-column">
                    <span>Full name:</span><h3>{this.props.hero.biography[`full-name`]}</h3>
                  </div>
                  <div className="one-detail detail-column">
                    <span>Place of birth:</span><h3>{this.props.hero.biography[`place-of-birth`]}</h3>
                  </div>
                  <div className="one-detail detail-column">
                    <span>First appearance:</span><h3>{this.props.hero.biography[`first-appearance`]}</h3>
                  </div>
                  <div className="one-detail detail-column">
                    <span>Aliases:</span>
                    <h3>{this.props.hero.biography.aliases[0]}</h3>
                    <h3>{this.props.hero.biography.aliases[1]}</h3>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      );
    }

}

export default HeroDetail;
