import Head from 'components/head';
import Header from 'components/header';
import { graphql, StaticQuery } from 'gatsby';
import GlobalStyle from 'global.css.js';
import PropTypes from 'prop-types';
import React from 'react';

const Layout = ({ data, children, style }) => (
  <div style={style}>
    <GlobalStyle />
    <Head />
    <Header title={data.site.siteMetadata.siteTitle} />
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
};

const LayoutWithQuery = props => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            siteTitle
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
);

LayoutWithQuery.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutWithQuery;
