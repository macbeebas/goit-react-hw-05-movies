const { useParams } = require('react-router-dom');

const Rewiews = () => {
  const { movieId } = useParams();

  return <div>Reviews: {movieId}</div>;
};

export default Rewiews;
