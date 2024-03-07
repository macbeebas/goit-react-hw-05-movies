const { useParams } = require('react-router-dom');

const Cast = () => {
  const { movieId } = useParams();
  return <div>Image actors: {movieId}</div>;
};
export default Cast;
