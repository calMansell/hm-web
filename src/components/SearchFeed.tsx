import React from 'react';
import { useLocation } from 'react-router-dom';

function SearchFeed() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const locationParam = searchParams.get('location');
  const keywordParam = searchParams.get('keyword');
  return (
    <div>SearchFeed</div>
  );
}

export default SearchFeed;
