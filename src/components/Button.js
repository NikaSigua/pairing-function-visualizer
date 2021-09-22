import styled from "styled-components";

const Button = styled.button`
  border-radius: 2px;
  margin: 1px;
  padding: 8px;
  font-size: 1rem;
  background-color: black;
  color: white;
  outline: none;
  border: none;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.25);
  top: 0;
  position: relative;
  transition: top ease 0.15s;


  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  align-content: stretch;

  &:hover {
    background-color: rgba(0, 0, 0, 0.85);
    position: relative;
    top: -2px;
  }

  cursor: pointer;

`;

export default Button;