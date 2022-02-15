/*
 *
 * HomePage
 *
 */

import React, { memo, useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { Typography } from '@strapi/design-system/Typography';
import ListTree from '../../components/ListTree';

const HomePage = () => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    fetch('http://localhost:1337/api/pages')
      .then(response => response.json())
      .then(result => setPages(result.data))
  }, [])

  return (
    <>
      <Typography variant='alpha'>Tree of pages</Typography>
      <ListTree/>
    </>
  );
};

// Om sidan har barn: skriva ut sidan och dess barn

export default memo(HomePage);
