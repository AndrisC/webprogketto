import React, {} from 'react';
import '../style/App.css';
import '../style/Herocard.css';
import '../style/Heroes.css';
import '../style/search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from "axios";
import HeroDetail from '../components/heroDetail';


export default class Search extends React.Component {
    state = {
      heroid: 0,
      loaded: false,
      searchResults: [],
    };

    _onButtonClick(hero) {
      this.setState({
        showComponent: true,
        heroid: hero.id,
      });
      console.log(hero);
    }

    hideComponent() {
      this.setState({
        showComponent: false,
      });
    }

    async fetchResults() {
      const urlName = "/api/3061607853876230/search/";
      const nameFragment = document.getElementById("search-txt").value;
      this._onButtonClick = this._onButtonClick.bind(this);
      this.hideComponent = this.hideComponent.bind(this);
      console.log("Search: ", nameFragment);
      axios.get(urlName + nameFragment).then(value => {
        this.state.searchResults = value.data.results;
        console.log(this.state.searchResults)
        this.resultCheck();
        this.setState({loaded: true});
      });
    }

    async resultCheck() {
        if (typeof this.state.searchResults === 'undefined') {
            console.log("No results to show");
        }
    }

    render() {
      return (
        <div id="search-container">
          <div className="page-title">
            <h1>Search in the collection</h1>

            <div className="search-field">
              <input
                id="search-txt"
                type="text"
                placeholder="Ironman..."
              />

              <FontAwesomeIcon
                icon="search"
                className="search-icon"
                onClick={() => this.fetchResults()}
              />
            </div>
          </div>


          <div>
            <div className="container-title">
              <h3>Results:</h3>
            </div>
            {!this.state.loaded || this.state.searchResults === null ?
              <div className="container-title">
                {typeof this.state.searchResults === 'undefined' ?
                  <p>No superhero found with that name... sorry</p> :
                  <p>the results will appear here...</p>
                }
              </div> :
              <div className="card-container">
                {this.state.searchResults.map(result => (
                  <div key={result.id.toString()} className="hero-card">
                    <img className="hero-pic" src={result.image.url}></img>
                    <img className="hero-card-bg" src={result.image.url}></img>

                    <div className="hero-info">
                      <span>Name:</span>
                      <h2>{result.name}</h2>

                      <span>Full name:</span>
                      {(result.biography["full-name"] === "") ?
                        <h2>Unknown</h2> :
                        <h2>{result.biography["full-name"]}</h2>
                      }

                      <span>Race:</span>
                      {(result.appearance.race === "null") ?
                        <h2>Unknown</h2> :
                        <h2>{result.appearance.race}</h2>
                      }

                      <div className="btn-container">
                        <button onClick={() => this._onButtonClick(result)} className="more-info-btn" type="button">
                          More info
                        </button>
                      </div>
                    </div>

                    <div className="hero-component">
                      {this.state.showComponent && result.id === this.state.heroid ?
                        <div className="hero-details-wrapper">
                          <div onClick={this.hideComponent} className="hero-details-overlay"></div>
                          <HeroDetail hero={result}/>
                        </div> :
                        null
                      }
                    </div>
                </div>
                ))}
              </div>
            }
          </div>

        </div>
      );
    }
}
