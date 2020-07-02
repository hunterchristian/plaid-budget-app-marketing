import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from 'components/box';
import IOExample from 'components/io-example';
import Layout from 'components/layout';
import Title from 'components/title';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles({
  heroText: {
    textAlign: 'center',
    //fontSize: '15rem',
    marginBottom: '6rem',
    color: 'rgb(59, 117, 83)',
    fontFamily: '"Yeseva One", cursive',
  },
});

const Index = ({ data }) => {
  const classes = useStyles();
  return (
    <Layout>
      <div style={{ height: '90vh' }}>
        <Box
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            padding: '0 4rem 2rem 4rem',
          }}
        >
          <Typography className={classes.heroText} variant="h1">
            {data.homeJson.title}
          </Typography>
          <Title
            as="h2"
            size="large"
            style={{
              fontFamily: '"Open Sans", sans-serif',
              textAlign: 'center',
              color: '#3b7553',
            }}
          >
            {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
          </Title>
        </Box>
      </div>
      <div
        style={{
          background: 'rgba(59, 117, 83, .25)',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <Title
            as="h2"
            size="large"
            style={{
              fontFamily: '"Open Sans", sans-serif',
              textAlign: 'center',
              color: '#3b7553',
            }}
          >
            {
              'We calculate your daily budget. At the end of the day, any leftover funds will be transferred into a savings account.'
            }
          </Title>
        </Box>
      </div>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <Title
            as="h2"
            size="large"
            style={{
              fontFamily: '"Open Sans", sans-serif',
              textAlign: 'center',
              color: '#3b7553',
            }}
          >
            {
              'Never live beyond your means again. Piggybank provides a gentle awareness of overspending.'
            }
          </Title>
        </Box>
      </div>
      <div
        style={{
          background: 'rgba(59, 117, 83, .25)',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <Title
            as="h2"
            size="large"
            style={{
              fontFamily: '"Open Sans", sans-serif',
              textAlign: 'center',
              color: '#3b7553',
            }}
          >
            {'Encrypted at rest. Your data is under lock and key.'}
          </Title>
        </Box>
      </div>
      <div style={{ height: '50vh' }} />
      <IOExample />
      <div>
        Icons made by{' '}
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>{' '}
        from{' '}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </Layout>
  );
};

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
