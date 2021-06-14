import React from 'react';
import '../style/newhero.css';

export default class newHero extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            hero: {
                id: Math.random() * 999 + 1000,
                name: '',
                fullName: '',
                alterEgo: '',
                alias: '',
                gender: '',
                race: '',
                alignment: '',
                work: '',
                image: ''
            }
        }

        this.handleSave = this.handleSave.bind(this);
    }



    handleSave(e) {
        e.preventDefault(); // prevents page reload

        var hero = this.state.hero;
        hero['biography'] = {fullName: hero.name};
        hero['appearance'] = {race: hero.race};
        hero['image'] = {url: hero.image};
        hero['full-name'] = hero.fullName;

        let savedHeroes = localStorage.getItem("savedHeroes");
        if (savedHeroes === null) {
            savedHeroes = []
        } else {
            savedHeroes = JSON.parse(savedHeroes);
        }
        savedHeroes.push(this.state.hero);
        localStorage.setItem("savedHeroes", JSON.stringify(savedHeroes));
    }

    handleChangeEvent = (e) => {
        let key = e.target.name;
        let value = e.target.value;
        this.state.hero[key] = value;
    }

    render() {
        return (
            <div id="content-new">
                <div id="colorise-new">
                    <div id="middle">
                        <h1 className="create-hero-title">Create your own hero!</h1>
                        <div id="new-hero">
                            <form className="inputs" onSubmit={this.handleSave}>
                                <p>
                                    <label>Name</label>
                                    <input name="name" placeholder="e.g.: Superman" type="text" onChange={this.handleChangeEvent}></input>
                                </p>
                                <p>
                                    <label>Full name</label>
                                    <input name="fullName" placeholder="e.g.: Kal-El" type="text" onChange={this.handleChangeEvent}></input>
                                </p>
                                <p>
                                    <label>Alter egos</label>
                                    <input name="alterEgo" placeholder="e.g.: Superman Prime One-Million" type="text" onChange={this.handleChangeEvent}></input>
                                </p>
                                <p>
                                    <label>Aliases</label>
                                    <input name="alias" placeholder="e.g.: Clark Joseph Kent, The Man of Steel" type="text" onChange={this.handleChangeEvent}></input>
                                </p>
                                <p>
                                    <label>Gender</label>
                                    <input name="gender" placeholder="e.g.: Male" type="text" onChange={this.handleChangeEvent}></input>
                                </p>
                                <p>
                                    <label>Race</label>
                                    <input name="race" placeholder="e.g.: Kryptonian" type="text" onChange={this.handleChangeEvent}></input>
                                </p>
                                <div className="custom-select">
                                    <label>Aligment</label>
                                    <select name="alignment" onChange={this.handleChangeEvent}>
                                        <option value="0">Good</option>
                                        <option value="1">Bad</option>
                                        <option value="2">Neutral</option>
                                        <option value="2">Renegate</option>
                                    </select>
                                </div>
                                <p>
                                    <label>Work</label>
                                    <input name="work" placeholder="e.g.: Reporter for the Daily Planet and novelist" type="text" onChange={this.handleChangeEvent}></input>
                                </p>
                                <p>
                                    <label>Image URL</label>
                                    <input name="image" placeholder="www.something.jpg" type="url" onChange={this.handleChangeEvent}></input>
                                </p>

                                <button type="submit">Create Supe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
