import React, {} from 'react';
import '../style/HeroDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class HeroDetail extends React.Component {
    state = {
      pwr_avrg: Math.floor((parseInt(this.props.hero.powerstats.intelligence) +
      parseInt(this.props.hero.powerstats.power) +
      parseInt(this.props.hero.powerstats.speed) +
      parseInt(this.props.hero.powerstats.strength) +
      parseInt(this.props.hero.powerstats.combat))/5),
    };

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

                    <div className="power-average">
                      { this.state.pwr_avrg.toString() !== "NaN" ?
                        <h1>{this.state.pwr_avrg}</h1> :
                        null
                      }

                    </div>

                    <div className="one-detail power-stat">
                      <span>Intelligence:</span>
                      <div className="power-container">
                        <h3>{this.props.hero.powerstats.intelligence}</h3>
                        <FontAwesomeIcon className="power-icon" icon="brain"/>
                      </div>
                    </div>
                    <div className="one-detail power-stat">
                      <span>Power:</span>
                      <div className="power-container">
                        <h3>{this.props.hero.powerstats.power}</h3>
                        <FontAwesomeIcon className="power-icon" icon="bolt"/>
                      </div>
                    </div>
                    <div className="one-detail power-stat">
                      <span>Speed:</span>
                      <div className="power-container">
                        <h3>{this.props.hero.powerstats.speed}</h3>
                        <FontAwesomeIcon className="power-icon" icon="forward"/>
                      </div>
                    </div>
                    <div className="one-detail power-stat">
                      <span>Strength:</span>
                      <div className="power-container">
                        <h3>{this.props.hero.powerstats.strength}</h3>
                        <FontAwesomeIcon className="power-icon" icon="dumbbell"/>
                      </div>
                    </div>
                    <div className="one-detail power-stat">
                      <span>Combat:</span>
                      <div className="power-container">
                        <h3>{this.props.hero.powerstats.combat}</h3>
                        <FontAwesomeIcon className="power-icon" icon="fist-raised"/>
                      </div>
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
