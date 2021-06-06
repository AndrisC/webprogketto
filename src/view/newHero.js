import React from 'react';
import '../style/newhero.css';

export default function newHero() {
    return (
        <div id="content-new">
            <div id="colorise-new">
                <div id="middle">
                    <h1 class="create-hero-title">Create your own hero!</h1>
                    <dv id="new-hero">
                        <form className="inputs">
                            <p>
                                <label>Name</label>
                                <input className="name" placeholder="e.g.: Superman" type="text"></input>
                            </p>
                            <p>
                                <label>Full name</label>
                                <input className="full-name" placeholder="e.g.: Kal-El" type="text"></input>
                            </p>
                            <p>
                                <label>Alter egos</label>
                                <input className="alter-egos" placeholder="e.g.: Superman Prime One-Million" type="text"></input>
                            </p>
                            <p>
                                <label>Aliases</label>
                                <input className="aliases" placeholder="e.g.: Clark Joseph Kent, The Man of Steel" type="text"></input>
                            </p>
                            <p>
                                <label>Gender</label>
                                <input className="gender" placeholder="e.g.: Male" type="text"></input>
                            </p>
                            <p>
                                <label>Race</label>
                                <input className="race" placeholder="e.g.: Kryptonian" type="text"></input>
                            </p>
                            <div className="custom-select">
                                <label>Aligment</label>
                                <select>
                                    <option value="0">Good</option>
                                    <option value="1">Bad</option>
                                    <option value="2">Neutral</option>
                                    <option value="2">Renegate</option>
                                </select>
                            </div>
                            <p>
                                <label>Work</label>
                                <input className="work" placeholder="e.g.: Reporter for the Daily Planet and novelist" type="text"></input>
                            </p>
                            <p>
                                <label>Image URL</label>
                                <input className="img" placeholder="www.something.jpg" type="url"></input>
                            </p>
                        </form>
                    </dv>
                </div>
            </div>
        </div>
    )
}
