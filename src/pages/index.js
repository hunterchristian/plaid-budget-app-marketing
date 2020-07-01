import Box from 'components/box';
import IOExample from 'components/io-example';
import Layout from 'components/layout';
import Title from 'components/title';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Index = ({ data }) => (
  <Layout>
    <Box
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '0 4rem 2rem 4rem',
      }}
    >
      <Title
        as="h1"
        style={{ textAlign: 'center', fontSize: '9em', marginBottom: '6rem' }}
      >
        {data.homeJson.title}
      </Title>
      <Title
        as="h2"
        size="large"
        style={{ fontFamily: '"Open Sans", sans-serif', textAlign: 'center' }}
      >
        {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>
    </Box>
    <div style={{ height: '50vh' }} />
    <IOExample />
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
