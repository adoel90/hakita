// Fetcher.js
import React from 'react';
// import Spinner from './Spinner'; // not provided in this post
// import Error from './Error'; // not provided in this post
import { useFetcher } from './useFetcher';

const Fetcher = ({ action, children }) => {
  const [data, loading, error] = useFetcher(action);
 
//   if (loading) return <Spinner />;
//   if (error) return <Error error={error} />
  if (!data) return null;
  return children(data);
};
export default Fetcher;