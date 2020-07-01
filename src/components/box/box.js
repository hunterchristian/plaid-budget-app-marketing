import PropTypes from 'prop-types';
import React from 'react';
import { Container } from './box.css';

const Box = ({ children, style }) => (
  <Container style={style}>{children}</Container>
);

Box.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Box;
