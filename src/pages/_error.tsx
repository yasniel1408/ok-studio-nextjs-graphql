import React, { useEffect } from 'react';
import Router from 'next/router';

// eslint-disable-next-line no-underscore-dangle
export default function _error() {
  useEffect(() => {
    Router.push('/admin/dashboard');
  }, []);

  return <div />;
}
