import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import { CarsList } from "./Collectin.styled";

const CarsCollection = () => {
    // тут також можна робити запит HTTP

    return <CarsList>
        <h2>Колекція машин</h2>
        {['opel', 'bmw', 'reno', 'porshe', 'lincoln'].map(car => { 
            return <Link key={nanoid()} to={`${car}`}>{car}</Link>
        })}
    </CarsList>
};

export default CarsCollection;