import React from "react";
import styled from "styled-components";

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Nav from "./components/Nav";

const Body = styled.div`
  margin: auto;
  padding: 15px;

  display: flex;
  place-self: center;
  flex-direction: column;
  justify-content: center;
  width: fit-content;
`;



function App() {
  return (
    <React.Fragment>
      <Nav />
        <Body>
      <Header />
      <Main />
        </Body>
      <Footer />
    </React.Fragment>
  );
}

export default App;
