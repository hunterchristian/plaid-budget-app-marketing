import Hamburger from 'components/header/hamburger';
import PropTypes from 'prop-types';
import React from 'react';
import posed from 'react-pose';
import { Container } from './header.css';

// Example of a component-specific page transition
const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '-100%',
    transition: {
      ease: 'easeInOut',
    },
  },
});

const Header = () => (
  <AnimatedContainer>
    <Container>
      <Hamburger style={{ fill: '#3b7553' }} />
    </Container>
  </AnimatedContainer>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
