import { useParams } from 'react-router-dom';

const Gallery = () => {
  const { carId } = useParams();

  return (
    <div>
      <h2>Photo gallery of {carId}</h2>
    </div>
  );
};

export default Gallery;
