import { Loader } from 'components/Loader/Loader';
import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

import css from './Layout.module.css';

const StyledLink = styled(NavLink)`
  &.active {
    background-color: lightblue;
  }
`;

const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <nav className={css.nav}>
          <StyledLink to="/" className={`${css.link}, ${css.nav__item}`}>
            Home
          </StyledLink>
          <StyledLink to="/movies" className={`${css.link}, ${css.nav__item}`}>
            Movies
          </StyledLink>
        </nav>
      </header>
      <main className={css.main}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
export default Layout;
