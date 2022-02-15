/**
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { NotFound } from '@strapi/helper-plugin';
import pluginId from '../../pluginId';
import HomePage from '../HomePage';
import { ThemeProvider } from '@strapi/design-system';
import { lightTheme } from '@strapi/design-system/themes';

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Switch>
        <Route path={`/plugins/${pluginId}`} component={HomePage} exact />
        <Route component={NotFound} />
      </Switch>
    </ThemeProvider>
  );
};

export default App;
