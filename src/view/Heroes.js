import React, {useState, useEffect, Component, useCallback} from 'react';
import '../style/App.css';
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
                        <div>{button}</div>
                    </div>                    
                }
            </div>
        )
    }
}
