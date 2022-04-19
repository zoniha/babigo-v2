import { VFC } from 'react';
import styled from 'styled-components';

// Component style
const StGooLogo = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  max-width: 200px;
  vertical-align: bottom;
  z-index: 99;
`;

export const GooLogo: VFC = () => {
  return (
    <>
      <a href="http://www.goo.ne.jp/" target="_blank" rel="noopener noreferrer">
        <StGooLogo src="//u.xgoo.jp/img/sgoo.png" alt="supported by goo" title="supported by goo" />
      </a>
    </>
  );
};