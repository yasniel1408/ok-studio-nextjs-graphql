import React, { useEffect } from 'react';
import Router from 'next/router';

export default function Error404() {
  useEffect(() => {
    Router.push('/admin/dashboard');
  });

  return <div />;
}
