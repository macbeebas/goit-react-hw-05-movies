// const Home = () => {
//   return <div>HomePage</div>;
// };
// export default Home;

// ----------------------------------------------------
import React, { useState, useEffect } from 'react';

import TrendingList from '../../components/TrendingList/TrendingList';
import { getTrendingList } from '../../api/themoviedb';

import css from './Home.module.css';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const data = await getTrendingList();
      setMovies([...data]);
    }

    getMovies();
  }, []);

  return (
    <>
      <h1 className={css.header}>Trending today</h1>
      {movies && <TrendingList movies={movies} />}
    </>
  );
}

export default Home;
