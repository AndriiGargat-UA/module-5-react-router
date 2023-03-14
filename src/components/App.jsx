import Car from 'pages/CarDetails';
import CarsCollection from 'pages/Collectin';
import Home from 'pages/Home';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import Layout from './Layout';
import { LayoutMain } from './LayoutMain';

export const App = () => {
  return (
    <LayoutMain>
      <GlobalStyle />

      {/* Список сторінок додатку*/}
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* нижче індексний елем який рендериться разом з батьком Layout */}
          <Route index element={<Home />} />
          <Route path="cars" element={<CarsCollection />} />
          <Route path="cars/:carId" element={<Car />}>
            <Route path="models" element={<div>models</div>} />
            <Route path="gallery" element={<div>gallery</div>} />
          </Route>
        </Route>
      </Routes>
    </LayoutMain>
  );
};