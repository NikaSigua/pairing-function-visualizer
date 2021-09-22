import React from "react";
import styled from "styled-components";

const Portal = styled.div`
  text-align: center;
  display: block;
  position: sticky;
  top: 0;
  background-color: white;
  padding-top: 5px;
  z-index: 1;
`;

const StyledNav = styled.nav`
  text-align: center;
  background-color: black;
  font-size: 20px;
  margin: 1px 5px 0 5px;
  border: black 1px solid;
  border-radius: 2px;
  display: flex;
  place-self: center;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  z-index: auto;
`;

const Title = styled.div`
  text-align: center;
  font-family: Georgia, serif;
  font-weight: bold;
  font-size: 20px;
  border: black 1px solid;
  border-radius: 2px;
  padding: 8px;
  background-color: black;
  color: white;
`;

const Container = styled.div`
  text-align: center;
  background-color: black;
  color: white;
  font-size: 20px;
  border-radius: 2px;
  padding: 8px;
`;

const Nav = () => {
    return (
        <Portal>
            <StyledNav>
                <Container>

                </Container>
                <Title>
                    Pairing Function Visualizer
                </Title>
                <Container>

                </Container>
            </StyledNav>
        </Portal>
    );
};

export default Nav;