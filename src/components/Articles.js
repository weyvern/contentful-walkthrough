import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import client from '../contentful/client';
import noImg from '../assets/img/noimg.png';

const Articles = () => {
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    if (topic === 'main') {
      client
        .getEntries()
        .then(({ items }) => {
          console.log(items);
          setArticles(items);
          setLoading(false);
        })
        .catch(err => setError(err));
    } else {
      client
        .getEntries({ content_type: topic })
        .then(({ items }) => {
          console.log(items);
          setArticles(items);
          setLoading(false);
        })
        .catch(err => setError(err));
    }
  }, [topic]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className='container'>
      <h1>{topic.toUpperCase()}</h1>
      <div className='row'>
        {articles.map(article => (
          <div className='col-md-3 mb-3'>
            <div className='card' key={article.sys.id}>
              {article.fields.mainImage ? (
                <img
                  className='card-img-top'
                  src={article.fields.mainImage.fields.file.url}
                  alt={article.fields.title}
                  style={{ objectFit: 'cover', height: '200px' }}
                />
              ) : (
                <img
                  className='card-img-top'
                  src={noImg}
                  alt='noimg'
                  style={{ objectFit: 'cover', height: '200px' }}
                />
              )}
              <div className='card-body'>
                <h5 className='card-title'>{article.fields.title}</h5>
                <Link to={`/articles/single/${article.sys.id}`} className='btn btn-primary'>
                  Go to article
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
