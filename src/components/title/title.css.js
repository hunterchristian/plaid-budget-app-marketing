import MEDIA from 'helpers/mediaTemplates';
import styled from 'styled-components';

export const Text = styled.span`
  font-family: 'Yeseva One', cursive;
  display: block;
  font-weight: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '400';
      default:
        return '500';
    }
  }};
  font-size: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '3.2rem';
      default:
        return '2rem';
    }
  }};
  line-height: 1.2;

  ${MEDIA.TABLET`
    font-size: ${({ size }) => () => {
      switch (size) {
        case 'large':
          return '2.6rem';
        default:
          return '2rem';
      }
    }};
  `};
`;
