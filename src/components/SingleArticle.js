import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import client from '../contentful/client';
import noImg from '../assets/img/noimg.png';

const SingleArticle = () => {
  const { id } = useParams();
  const [article, setArticle] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    client
      .getEntry(id)
      .then(res => {
        setArticle(res);
        setLoading(false);
      })
      .catch(err => setError(err));
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return article ? (
    <div className='container'>
      <h1>{article.fields.title}</h1>
      <div className='row'>
        <div className='col-md-6'>
          {article.fields.mainImage ? (
            <img src={article.fields.mainImage.fields.file.url} alt={article.fields.title} />
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
