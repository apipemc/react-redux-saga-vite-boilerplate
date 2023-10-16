import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { setUrlParams } from '@/modules/nav/actions';

const Home = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setUrlParams({ page: 1, limit: 10 }));
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center pb-7">Home</h1>
      <div className="grid grid-cols-2">
        <Link
          className="p-2 font-medium text-blue-600 dark:text-blue-500 hover:underline"
          to="/"
        >
          Home
        </Link>
        <button
          className="p-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          onClick={handleClick}
        >
          Click Params URL
        </button>
      </div>
    </>
  );
};

export default Home;
