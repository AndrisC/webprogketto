import React, {useState, useEffect, Component} from 'react';
import '../style/App.css';
import {BrowserRouter as Link} from 'react-router-dom';


export default class Heroes extends React.Component {
    state = {
        loading: true,
        heroes: [],
    };

    async componentDidMount() {
        const url = "https://www.superheroapi.com/api.php/3061607853876230/";
        for (let id = 1; id < 11; id++) {
            console.log(id);
            const hero = await (await fetch(url + id)).json();
            this.state.heroes.push(hero);
            console.log(this.state.heroes);
        }

        this.setState({loading: false});
    }

    render() {
        return (
            <div>
                {this.state.loading ?
                    <div className="loading">loading...</div> :
                    <div id="heroes">
                        <ul className="flex-container">
                        {this.state.heroes.map(hero => (
                            <div key={hero.id.toString()} className="box">
                                <li className="listed-text">
                                    <img className="cover" src={hero.image.url}></img>
                                    <h1>- {hero.name} -</h1>
                                    <h2>{hero.biography["full-name"]}</h2>
                                    <h3>{hero.work.occupation}</h3>
                                    <h3>{hero.appearance.race}</h3>
                                    <a href={'/hero/' + hero.id}>
                                        <Link to={'/hero/' + hero.id}>More info</Link>
                                    </a>
                                </li>
                            </div>
                        ))
                        }
                        </ul>
                    </div>
                }
            </div>
        )
    }
}
