import React from "react";
import styled from "styled-components";

const StyledControlPanel = styled.form`
  margin: 1px;
  padding: 1px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: auto;
  z-index: auto;
`;

const ControlPanel = (props) => {
    return (
        <StyledControlPanel>
            {props.children}
        </StyledControlPanel>
    );
};

export default ControlPanel;
