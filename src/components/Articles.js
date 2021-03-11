import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import client from '../contentful/client';
import noImg from '../assets/img/noimg.png';
import Loading from './Loading';

const Articles = () => {
  const { content_type } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    if (!content_type) {
      client
        .getEntries()
        .then(({ items }) => {
          setArticles(items);
          setLoading(false);
        })
        .catch(err => setError(err));
    } else {
      client
        .getEntries({ content_type })
        .then(({ items }) => {
          setArticles(items);
          setLoading(false);
        })
        .catch(err => {
          setError(err);
          setLoading(false);
        });
    }
  }, [content_type]);

  if (loading) return <Loading />;
  if (error) return <div className='container'>Error: {error.message}</div>;
  return (
    <div className='container'>
      <h1>{content_type ? content_type.toUpperCase() : 'Our articles'}</h1>
      <div className='row'>
        {articles.map(article => (
          <div key={article.sys.id} className='col-md-3 mb-3'>
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
                <Link
                  to={`/articles/${article.sys.contentType.sys.id}/${article.fields.slug}`}
                  className='btn btn-primary'
                >
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
