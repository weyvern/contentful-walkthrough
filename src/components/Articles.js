import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import client from '../contentful/client';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    setLoading(true);
    client
      .getEntries({ content_type: 'blogProject', order: 'sys.createdAt' })
      .then(({ items }) => {
        setArticles(items);
        setLoading(false);
      })
      .catch(err => setError(err));
  }, []);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      <h1>Articles</h1>
      {articles.map(article => (
        <div key={article.sys.id}>
          <Link to={`/articles/${article.fields.article}`}>
            {article.fields.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Articles;
