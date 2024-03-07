import { Link } from 'react-router-dom';

const Movies = () => {
  return (
    <div>
      <form>
        <input type="text" />
        <button type="submit">Search</button>
      </form>
      {['movie-1', 'movie-2', 'movie-3', 'movie-4', 'movie-5'].map(m => {
        return (
          <li key={m}>
            <Link to={`${m}`}>{`it's info about ${m}`}</Link>
          </li>
        );
      })}
    </div>
  );
};
export default Movies;
