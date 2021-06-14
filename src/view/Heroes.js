import React from 'react';
import '../style/App.css';
import '../style/Heroes.css';
import '../style/Herocard.css';
import HeroDetail from '../components/heroDetail';


export default class Heroes extends React.Component {
  state = {
    loading: true,
    heroes: [],
    showComponent: false,
    heroid: 0,
    idCountFrom: 1,
    canNextPage: true,
    canPrevPage: false,
    currentPage: 1,
    pagination: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    heroAmountPerPage: 12,
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

  async componentDidMount() {
    const url = "https://www.superheroapi.com/api.php/3061607853876230/";
    this.handleRemoveHeroes();
    this._onButtonClick = this._onButtonClick.bind(this);
    this.hideComponent = this.hideComponent.bind(this);

    let savedHeroes = localStorage.getItem("savedHeroes");
    if (savedHeroes !== null) {
      this.setState({
        heroes: JSON.parse(savedHeroes)
      })
    }

    console.log("listing starts from: ", this.state.idCountFrom)
    for (let id = 0; id <= this.state.heroAmountPerPage - 1; id++) {
      const currentID = this.state.idCountFrom + id;
      //console.log(currentID);
      const hero = await (await fetch(url + currentID)).json();
      this.state.heroes.push(hero);
      // console.log(this.state.heroes);
      console.log(document);
    }

    console.log("repa",this.state.heroes);
    this.setState({ loading: false });
  }

  handleRemoveHeroes() {
    this.setState({
      heroes: []
    })
  }

  async handleNextButtonClick() {
    await this.setState({
      loading: true,
      currentPage: this.state.currentPage + 1,
      idCountFrom: this.state.idCountFrom + this.state.heroAmountPerPage
    });
    console.log("Current Page: ", this.state.currentPage);
    this.handleButtonVisibility();
    this.paginationCalculator();
    this.componentDidMount();
  }

  async handlePrevButtonClick() {
    await this.setState({
      loading: true,
      currentPage: this.state.currentPage - 1,
      idCountFrom: this.state.idCountFrom - this.state.heroAmountPerPage
    });
    console.log("Current Page: ", this.state.currentPage);
    this.handleButtonVisibility();
    this.paginationCalculator();
    this.componentDidMount();
  }

  async handleButtonVisibility() {
    if (this.state.currentPage <= 1) {
      await this.setState({ canPrevPage: false, canNextPage: true });
    } else if (this.state.currentPage === 61) {
      await this.setState({ canNextPage: false, canPrevPage: true });
    } else {
      await this.setState({ canNextPage: true, canPrevPage: true });
    }
  }

  async handlePaginationClick(pageValue) {
    if (pageValue !== this.state.currentPage) {
      console.log("You will be redirected to page ", pageValue);
      await this.setState({
        loading: true,
        currentPage: pageValue,
        idCountFrom: pageValue * this.state.heroAmountPerPage - (this.state.heroAmountPerPage - 1)
      });
      this.paginationCalculator();
      this.handleButtonVisibility();
      this.componentDidMount();
    }
  }

  async paginationCalculator() {
    let updatePagination = [];

    if (this.state.currentPage <= 5) {
      await this.setState({ pagination: [1, 2, 3, 4, 5, 6, 7, 8, 9] });
    } else if (this.state.currentPage >= 57) {
      await this.setState({ pagination: [53, 54, 55, 56, 57, 58, 59, 60, 61] });
    } else {
      for (let pageNumber = 0; pageNumber <= 8; pageNumber++) {
        let calculatedPageNumber = this.state.currentPage - 4 + pageNumber;
        updatePagination[pageNumber] = calculatedPageNumber;
        console.log("Pagination: ", this.state.pagination[pageNumber]);
      }
      await this.setState(() => ({ pagination: [] = updatePagination }));

    }
  }

  render() {
    return (
      <div className="heroes-page">
        {this.state.loading ?
          <div id="heroes">
            <div className="page-title">
              <h1>Hero collection</h1>
            </div>
            <div className="card-container">
              <div className="hero-card loading-placeholder">
                <div className="hero-pic"></div>
              </div>
              <div className="hero-card loading-placeholder">
                <div className="hero-pic"></div>
              </div>
              <div className="hero-card loading-placeholder">
                <div className="hero-pic"></div>
              </div>
              <div className="hero-card loading-placeholder">
                <div className="hero-pic"></div>
              </div>
            </div>
          </div> :

          <div id="heroes">
            <div className="page-title">
              <h1>Hero collection</h1>
            </div>

            <div className="card-container">
              {this.state.heroes.map(hero => (
                <div key={hero.id.toString()} className="hero-card">
                  <img className="hero-pic" src={hero.image.url}></img>
                  <img className="hero-card-bg" src={hero.image.url}></img>

                  <div className="hero-info">
                    <span>Name:</span>
                    <h2>{hero.name}</h2>

                    <span>Full name:</span>
                    {(hero.biography["full-name"] === "") ?
                      <h2>Unknown</h2> :
                      <h2>{hero.biography["full-name"]}</h2>
                    }

                    <span>Race:</span>
                    {(hero.appearance.race === "null") ?
                      <h2>Unknown</h2> :
                      <h2>{hero.appearance.race}</h2>
                    }

                    <div className="btn-container">
                      <button onClick={() => this._onButtonClick(hero)} className="more-info-btn" type="button">
                        More info
                          </button>
                    </div>

                  </div>
                  <div className="hero-component">
                    {this.state.showComponent && hero.id === this.state.heroid ?
                      <div className="hero-details-wrapper">
                        <div onClick={this.hideComponent} className="hero-details-overlay"></div>
                        <div className="guide-div">
                          <div class="g-d">
                            <div className="close-icon" onClick={this.hideComponent}>
                              <p>X</p>
                            </div>
                          </div>
                        </div>
                        <HeroDetail hero={hero} />
                      </div> :
                      null
                    }
                  </div>
                </div>
              ))}
            </div>

            <div className="pagination-container">
              <div>
                <button
                  className={`pag-btn ${(!this.state.canPrevPage) ? "pag-btn-disabled" : ""}`}
                  onClick={() => this.handlePrevButtonClick()}
                  disabled={!this.state.canPrevPage}>PREVIOUS PAGE
                  </button>
              </div>

              {this.state.pagination.map(page => (
                <div key={page}>
                  <button
                    className={`single-pag-btn ${(this.state.currentPage === page) ? "active" : ""}`}
                    onClick={() => this.handlePaginationClick(page)}
                  >
                    {page}
                  </button>
                </div>
              ))}

              <div>
                <button
                  className={`pag-btn ${(!this.state.canNextPage) ? "pag-btn-disabled" : ""}`}
                  onClick={() => this.handleNextButtonClick()}
                  disabled={!this.state.canNextPage}>NEXT PAGE</button>
              </div>
            </div>

          </div>
        }
      </div>
    )
  }
}
