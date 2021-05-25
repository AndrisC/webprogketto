import React, {useState, useEffect} from 'react';
import '../style/App.css';
import ReactDOM from "react-dom";

function HeroDetail({match}) {
    useEffect(() => {
        fetchHero();
        console.log(match)
    }, []);

    const [hero, setHero] = useState({});
    const [img, setImg] =useState( ({}));


    const fetchHero = async () => {
        const hero = await (await fetch(
            'https://www.superheroapi.com/api.php/3061607853876230/' + match.params.id
        )).json();

        setImg(hero.image.url);
            setHero(hero);
        console.log(hero)
    }

    return (
        <div>
            <div id="add-collection"></div>
            <h1>{hero.name}</h1>
            <img
                src={img}
            />
        </div>
    );
}

export default HeroDetail;
