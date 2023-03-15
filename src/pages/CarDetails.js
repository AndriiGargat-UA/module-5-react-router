import { Link, Outlet, useParams } from 'react-router-dom';

const Car = () => {
  // const params = useParams();
  // console.log(params);

  const { carId } = useParams(); // Дає параметри елементу для запиту на бекенд

  //Тут робимо HTTP запит по id .... для деталей

  return (
    <div>
      <h2>CAR Details: {carId}</h2>
      <ul>
        <li>
          <Link to="models">Models</Link>
        </li>
        <li>
          <Link to="gallery">Gallery</Link>
        </li>
      </ul>
      <Outlet/>
    </div>
  );
};

export default Car;
