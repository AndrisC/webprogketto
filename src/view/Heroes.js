import React, {useState, useEffect, Component, useCallback} from 'react';
import '../style/App.css';
import {BrowserRouter as Link} from 'react-router-dom';
import { wait } from '@testing-library/dom';


export default class Heroes extends React.Component {
    state = {
        loading: true,
        heroes: [],
        idCountFrom: 1,
        canNextPage: true,
        canPrevPage: false,
        currentPage: 1,
        pagination: [1, 2, 3, 4, 5, 6, 7, 8, 9],
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
        await this.setState({
            loading: true,
            currentPage: this.state.currentPage+1,
            idCountFrom: this.state.idCountFrom+10});
        console.log("Current Page: ", this.state.currentPage);
        this.handleButtonVisibility();
        this.paginationCalculator();
        this.componentDidMount();
    }
    
    async handlePrevButtonClick() {
        await this.setState({
            loading: true,
            currentPage: this.state.currentPage-1,
            idCountFrom: this.state.idCountFrom-10});
        console.log("Current Page: ", this.state.currentPage);
        this.handleButtonVisibility();
        this.paginationCalculator();
        this.componentDidMount();
    }

    async handleButtonVisibility() {
        if (this.state.idCountFrom <= 1) {
            this.setState({canPrevPage: false});
        } else if (this.state.idCountFrom >= 729) {
            this.setState({canNextPage: false});
        } else {
            this.setState({canNextPage: true});
            this.setState({canPrevPage: true});
        }
    }

    async handlePaginationClick(pageValue) {
        console.log("You will be redirected to page ", pageValue);
        await this.setState({
            loading: true,
            currentPage: pageValue,
            idCountFrom: pageValue*10-9});
        this.paginationCalculator();
        this.handleButtonVisibility();
        this.componentDidMount();
    }

    async paginationCalculator() {
        let updatePagination = [];
            if (this.state.currentPage <= 5) {
                await this.setState({pagination: [1, 2, 3, 4, 5, 6, 7, 8, 9]});
            } else if (this.state.currentPage >= 70) {
                await this.setState({pagination: [66, 67, 68, 69, 70, 71, 72, 73, 74]});
            } else {
                for (let pageNumber = 0; pageNumber <= 8; pageNumber++) {
                    let calculatedPageNumber = this.state.currentPage - 4 + pageNumber;
                    updatePagination[pageNumber] = calculatedPageNumber;
                    console.log("Pagination: ", this.state.pagination[pageNumber]);
                }
                    await this.setState(() => ({pagination: [] = updatePagination} ));
                
            }
    }

    /*async paginationCalculator() {
        let newPagination = [];
            if (this.state.currentPage <= 5) {
                await this.setState({pagination: [1, 2, 3, 4, 5, 6, 7, 8, 9]});
            } else if (this.state.currentPage >= 70) {
                await this.setState({pagination: [66, 67, 68, 69, 70, 71, 72, 73, 74]});
            } else {
                for (let pageNumber = 1; pageNumber <= 9; pageNumber++) {
                    let calculatedPageNumber = this.state.currentPage - 5 + pageNumber;
                    newPagination[pageNumber] = calculatedPageNumber;
                    console.log("Pagination: ", newPagination[pageNumber]);
                }
                this.setState(() => ({ pagination: [newPagination] }))
            }
    }*/

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
                        ))}
                        </ul>
                        
                        <div><button onClick ={() => this.handleNextButtonClick()} disabled={!this.state.canNextPage}>NEXT PAGE</button></div>
                        {this.state.pagination.map(page => (
                            <div key ={page}>
                                <button onClick={() => this.handlePaginationClick(page)}>{page}</button>
                            </div>
                        ))}
                        <div><button onClick ={() => this.handlePrevButtonClick()} disabled={!this.state.canPrevPage}>PREVIOUS PAGE</button></div>
                    </div>                    
                }
            </div>
        )
    }
}
