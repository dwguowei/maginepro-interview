import React, {ReactNode} from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";
import LogoSrc from "../../assets/logo.png"
import DarkSrc from "../../assets/dark.png"
import LightSrc from "../../assets/light.png"
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {toggleDarkTheme} from "../../redux/actions";

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
  display: flex;
  justify-content: space-between;
`;

const LayoutMain = styled.main`
  grid-area: main;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
`;

const Logo = styled.img`
    width: 100px;
`;

const Toggle = styled.img`
  width: 30px;
  cursor: pointer;
  align-self: center;
  margin-right: 10px;
`;

const Layout =({children}: {children: ReactNode[] | ReactNode}) =>{

  const darkThemeEnabled = useAppSelector(state => state.state.enableDarkTheme);
  const dispatch = useAppDispatch();

  return(
    <>
      <LayoutContainer>
        <LayoutHeader className="layout-header">
          <Link to="/"><Logo src={LogoSrc} /></Link>
          <Toggle src={darkThemeEnabled ? LightSrc : DarkSrc} onClick={()=>dispatch(toggleDarkTheme())}/>
        </LayoutHeader>
        <LayoutMain className="layout-main">{children}</LayoutMain>
      </LayoutContainer>
    </>
  )
}

export default Layout;
