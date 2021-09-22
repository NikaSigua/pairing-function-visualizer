import React from "react";
import styled from "styled-components";

const StyledDisplay = styled.section`
  margin: 1px;
  padding: 5px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Display = (props) => {
    return (
        <StyledDisplay>
            {props.children}
        </StyledDisplay>
    );
};

export default Display;
