// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

// ----------------------------------------------------------------

import React, { lazy, useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('../Pages/Home'));
const Movies = lazy(() => import('../Pages/Movies'));
const MovieDetails = lazy(() => import('../Pages/MovieDetails'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));


import { getFromTheMovieDB } from './api/themoviedb.js';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import css from './App.module.css';

Notify.init({
  position: 'center-center',
});

export const App = () => {
  const [state, setState] = useState('');

  const [searchQuery, setSearchQuery] = useState('');

  const [movies, setMovies] = useState([]);
  const [totalHits, setTotalHits] = useState(0);

  const [actualPage, setActualPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [isLoader, setIsLoader] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const handleSubmitForm = query => {
    window.scrollTo(0, 0);
    if (query.trim() === '') {
      Notify.warning("Search request shouldn't be empty");
      return;
    }
    setState(query);
    setActualPage(1);
    setMovies([]);
  };

  useEffect(() => {
    if (searchQuery === '') return;

    setIsLoader(true);

    async function getData() {
      const response = await getFromPixabay(searchQuery, actualPage);
      if (response) {
        setPictures(p => [...p, ...response.pictures]);
        setTotalHits(response.totalHits);
        setIsLoader(false);
        setTotalPages(response.totalPages);
        if (response.pictures.length === 0) Notify.warning('No pictures found');

        if (response.pictures.length > 0 && actualPage === 1)
          Notify.success(
            `Found ${response.totalHits} pictures ${
              response.totalHits === 500 ? 'or more' : ''
            }`
          );
        if (actualPage === response.totalPages && response.totalPages > 1)
          Notify.info(`This is the last page`);
      }
    }
    getData();
    // }, []);
  }, [searchQuery, actualPage]);

  const toggleModalPict = () => {
    setIsModal(p => (p = !isModal));
  };

  const handleModalPict = e => {
    if (e.target.nodeName === 'IMG') {
      const openPict = e.target.getAttribute('data-modal');
      const openPictTags = e.target.getAttribute('data-tags');
      setBigPictureUrl(openPict);
      setBigPictureTags(openPictTags);
      toggleModalPict();
    }
  };

  const handleBtnLoadMore = () => {
    setActualPage(p => p + 1);
  };

  return (
    <div className={css.App}>
      <Searchbar onSubmit={handleSubmitForm} />

      {totalHits > 0 && (
        <ImageGallery pictures={pictures} onClick={handleModalPict} />
      )}
      {isLoader && <Loader />}

      {totalHits > 0 && actualPage < totalPages && (
        <ButtonLoadMore btnLoadMore={handleBtnLoadMore} />
      )}

      {isModal && (
        <Modal
          onClose={toggleModalPict}
          bigPictureUrl={bigPictureUrl}
          bigPictureTags={bigPictureTags}
        />
      )}
    </div>
  );
};

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:movieId" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>
      </Route>
    </Routes>
  );
};