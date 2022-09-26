import React from "react";
import { Container, Wrapper } from "./styles";

import Main from "./../Main/index";
import Menubar from "./../MenuBar/index";
import Sidebar from "./../Sidebar/index";

const Layout = () => {
  return (
    <Container>
      <Wrapper>
        <Menubar />
        <Main />
        <Sidebar />
      </Wrapper>
    </Container>
  );
};

export default Layout;
