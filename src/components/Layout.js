import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      {/* Навігація по react dom */}
      <ul>
        <li>
          <NavLink to="/">Home page</NavLink>
        </li>
        <li>
          <NavLink to="/cars">Collection</NavLink>
        </li>
      </ul>
      {/* Outlet вказує в якому місці буде рендеритись все вкладене в  Layout */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
