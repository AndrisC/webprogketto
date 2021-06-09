import React, {useState, useEffect, Component} from 'react';
import '../style/search.css';
import '../style/App.css';
import search from '../rsc/search.png';
import axios from "axios";
import {BrowserRouter as Link} from "react-router-dom";


export default class Search extends React.Component {
    state = {
        loaded: false,
        searchResults: [],
    };


    async fetchResults() {
        const urlName = "/api/3061607853876230/search/";
        const nameFragment = document.getElementById("search-txt").value;
        console.log("Search: ", nameFragment);
        axios.get(urlName + nameFragment).then(value => {
            this.state.searchResults = value.data.results;
            console.log(this.state.searchResults)
            this.resultCheck();
            this.setState({loaded: true});
        });
    }

    async resultCheck() {
        if (typeof this.state.searchResults == 'undefined') {
            console.log("No results to show");
        }
    }

    render() {
        return (
            <div id="flex-container-bg" className="S-app">
                <div className="search-bg"></div>
                <div id="search-field">

                    <div className="search-box">
                        <input
                            id="search-txt"
                            type="text"
                            placeholder="Search your favorite hero"
                        />
                        <img
                            className="search-icon"
                            src={search}
                            onClick={() => {
                                this.fetchResults()
                            }}>
                        </img>
                    </div>
                </div>

                <div id="result-field">
                    <div>
                        {!this.state.loaded || this.state.searchResults == null ?
                            <div></div> :
                            <div>
                                <ul id="flex-container-bg" className="flex-container">
                                    {this.state.searchResults.map(result => (
                                        <div key={result.id} className="box">
                                            <li className="listed-text">
                                                <a id="img-no-hover" href={'/hero/' + result.id}>
                                                    <img className="cover" src={result.image.url}></img>
                                                </a>
                                                <h1>- {result.name} -</h1>
                                                <h2>{result.biography["full-name"]}</h2>
                                                <h3>{result.work.occupation}</h3>
                                                <h3>{result.appearance.race}</h3>
                                                <a href={'/hero/' + result.id}>
                                                    <Link to={'/hero/' + result.id}>More info</Link>
                                                </a>
                                            </li>
                                        </div>

                                    ))}

                                </ul>
                            </div>
                        }
                    </div>
                </div>

            </div>
        );
    }
}
