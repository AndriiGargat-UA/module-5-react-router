import { useParams } from 'react-router-dom';

const Models = () => {
  const { carId } = useParams();

  return (
    <div>
      <h2>Models list {carId}:</h2>
    </div>
  );
};

export default Models;