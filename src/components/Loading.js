import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Loading = () => {
  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <Loader type='Watch' color='#2c3e50' height={100} width={100} timeout={3000} />
      </div>
    </div>
  );
};

export default Loading;
