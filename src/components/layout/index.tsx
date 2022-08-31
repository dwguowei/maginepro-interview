import React, {ReactNode} from 'react';
import styled from "styled-components";
import LogoSrc from "../../assets/logo.png"

const LayoutContainer = styled.div`
  display: grid;

  grid-template-areas:
    'header'
    'main';
  gap: 10px;
  width: 100%;
`;

const LayoutHeader = styled.header`
  grid-area: header;
`;

const LayoutMain = styled.main`
  grid-area: main;
`;

const Logo = styled.img`
    width: 100px;
`;

const Layout =({children}: {children: ReactNode[] | ReactNode}) =>{
  return(
    <>
      <LayoutContainer>
        <LayoutHeader className="layout-header"><Logo src={LogoSrc} /></LayoutHeader>
        <LayoutMain className="layout-main">{children}</LayoutMain>
      </LayoutContainer>
    </>
  )
}

export default Layout;
