import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import client from '../contentful/client';
import noImg from '../assets/img/noimg.png';
import Loading from './Loading';

const SingleArticle = () => {
  const { content_type, slug } = useParams();
  const [article, setArticle] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    client
      .getEntries({
        'fields.slug': slug,
        content_type
      })
      .then(({ items }) => {
        setArticle(items[0]);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [content_type, slug]);

  if (loading) return <Loading />;
  if (error) return <div className='container'>Error: {error.message}</div>;
  return article ? (
    <div className='container'>
      <h1>{article.fields.title}</h1>
      <div className='row'>
        <div className='col-md-6'>
          {article.fields.mainImage ? (
            <img
              src={article.fields.mainImage.fields.file.url}
              alt={article.fields.title}
              className='img-fluid'
            />
          ) : (
            <img src={noImg} alt='noImg' />
          )}
        </div>
        <div className='col-md-6'>
          <p>{article.fields.body}</p>
        </div>
      </div>
    </div>
  ) : (
    <div>No content</div>
  );
};

export default SingleArticle;
