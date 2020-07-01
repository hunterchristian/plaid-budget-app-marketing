import React from 'react';
import { Text } from './title.css';

const Title = ({ children, as = 'span', size, style }) => {
  return (
    <Text as={as} size={size} style={style}>
      {children}
    </Text>
  );
};

export default Title;
