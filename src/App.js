import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';

export const App = () => (
  <div>
    <Layout />
  </div>
);

export default withRouter(connect(App));
