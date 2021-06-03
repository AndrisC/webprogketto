import React, {useState, useEffect, Component, useCallback} from 'react';
import '../style/App.css';
import '../style/Heroes.css';
import '../style/Herocard.css';
import {BrowserRouter as Link} from 'react-router-dom';
import { wait } from '@testing-library/dom';


export default class Heroes extends React.Component {
    state = {
        loading: true,
        heroes: [],
        idCountFrom: 1,
    };


    async componentDidMount() {
        const url = "https://www.superheroapi.com/api.php/3061607853876230/";
        this.handleRemoveHeroes();
        console.log("listing starts from: ", this.state.idCountFrom)
        for (let id = 0; id <= 9; id++) {
            const currentID = this.state.idCountFrom+id;
            console.log(currentID);
            const hero = await (await fetch(url + currentID)).json();
            this.state.heroes.push(hero);
            console.log(this.state.heroes);
        }

        this.setState({loading: false});
    }

    handleRemoveHeroes() {
        this.setState({
            heroes: []
        })
    }

    async handleNextButtonClick() {
        this.setState({loading: true});
        await this.setState({idCountFrom: this.state.idCountFrom+10});
        this.componentDidMount();
    }

    async handlePrevButtonClick() {
        this.setState({loading: true});
        await this.setState({idCountFrom: this.state.idCountFrom-10});
        this.componentDidMount();
    }

    render() {
        const idCounter = this.state.idCountFrom;
        let button;
        if (idCounter <= 1) {
            button = <div><button onClick ={() => this.handleNextButtonClick()}>NEXT PAGE</button></div>;
        } else if(idCounter >= 600){
            button = <div><button onClick ={() => this.handlePrevButtonClick()}>PREVIOUS PAGE</button></div>;
        } else {
            button = <div>
                       <button onClick ={() => this.handlePrevButtonClick()}>PREVIUOS PAGE</button> <button onClick ={() => this.handleNextButtonClick()}>NEXT PAGE</button>
                    </div>;
        }
        if (true) {

        }

        return (
            <div class="heroes-page">
              {this.state.loading ?
                <div class="loading">loading...</div> :

                <div id="heroes">
                  <div class="page-title">
                    <h1>Hero collection</h1>
                  </div>

                  <div class="card-container">
                    {this.state.heroes.map(hero => (
                      <div key={hero.id.toString()} class="hero-card">
                        <img class="hero-pic" src={hero.image.url}></img>
                        <img class="hero-card-bg" src={hero.image.url}></img>

                        <div class="hero-info">
                          <span>Name:</span>
                          <h2>{hero.name}</h2>

                          <span>Full name:</span>
                          {(hero.biography["full-name"] == "") ?
                            <h2>Unknown</h2> :
                            <h2>{hero.biography["full-name"]}</h2>
                          }

                          <span>Race:</span>
                          {(hero.appearance.race == "null") ?
                            <h2>Unknown</h2> :
                            <h2>{hero.appearance.race}</h2>
                          }

                          <div class="btn-container">
                            <a href={'/hero/' + hero.id}>
                              <button class="more-info-btn" type="button">
                                <Link to={'/hero/' + hero.id}>More info</Link>
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div>{button}</div>
                </div>
              }
            </div>
        )
    }
}
