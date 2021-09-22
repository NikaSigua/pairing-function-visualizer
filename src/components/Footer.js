import React from 'react';
import styled from "styled-components";

const StyledFooter = styled.footer`
  text-align: center;
  background-color: black;
  margin: 1px 5px 10px 5px;
  border: black 1px solid;
  border-radius: 2px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  padding: 5px;
  display: flex;
  place-self: center;
  flex-direction: row;
  justify-content: space-between;
`;

const Shelf = styled.div`
  color: white;
  margin: 1px;
  padding: 1px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  align-content: stretch;
`;

const Footer = () => {
    return (
        <StyledFooter>
            <Shelf>
                <div>
                    <a style={{color: 'white', textDecoration: 'none'}}
                       href="https://en.wikipedia.org/wiki/Pairing_function">
                        <i className="fab fa-wikipedia-w"/>
                        IKIPEDI<span style={{fontSize: '19px'}}>A</span>
                    </a>
                </div>
            </Shelf>
            <Shelf>

            </Shelf>
            <Shelf>
                <a style={{color: 'white'}} href="https://github.com/NikaSigua/pairing-function-visualizer">
                    <i className="fab fa-github fa-2x"/>
                </a>
            </Shelf>
        </StyledFooter>
    );
};

export default Footer;
