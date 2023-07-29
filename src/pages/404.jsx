import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <main>
      <h2>
        Oops, something went wrong{' '}
        <a style={{ textDecoration: 'underline', color: 'blue' }} href='/'>
          Go back
        </a>
      </h2>
    </main>
  );
};

export default NotFound;
