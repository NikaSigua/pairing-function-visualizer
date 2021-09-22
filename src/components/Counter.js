import React from "react";
import styled from "styled-components";
import Button from "./Button";

const StyledCounter = styled.div`
  border: black 1px solid;
  border-radius: 2px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  height: 2.2rem;
  margin: 1px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.25);
  top: 0;
  position: relative;
  transition: top ease 0.15s;

  &:hover {
    position: relative;
    top: -2px;
  }
`;

const Ticker = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  height: 2.2rem;
  width: 1rem;
  overflow: hidden;
`;

const Increase = styled(Button)`
  border-radius: 1px;
  padding: 0;
  width: 1rem;
  height: 1.065rem;
  font-size: 1.2rem;
  margin: 0 0 0 0;
  font-weight: bolder;
  cursor: pointer;

  &:hover {
    position: relative;
    top: 0;
    filter: invert(100%);
  }
`;

const Decrease = styled(Button)`
  border-radius: 1px;
  padding: 0;
  width: 1rem;
  height: 1.065rem;
  font-size: 1.2rem;
  margin: 0 0 -.5px 0;
  padding-top: 2px;
  font-weight: bolder;
  cursor: pointer;

  &:hover {
    position: relative;
    top: 0;
    filter: invert(100%);
  }
`;

const Current = styled.div`
  display: flex;
  align-items: center;
  font-family: bold-caption, serif;
  font-size: 1.4rem;
  padding-left: 10px;
  padding-right: 10px;
  background-color: white;

  &:hover {
    background-color: white;
    position: relative;
    top: 0;
  }
`;

const CounterLabel = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  padding-left: 10px;
  padding-right: 10px;
  background-color: black;
  color: white;
  outline: none;
  border: none;

  &:hover {
    background-color: rgba(0, 0, 0, 0.85);
    position: relative;
    top: 0;
  }
`;

const I = styled.i`
padding: 0 0 3px .5px;
`;

const Counter = (props) => {
    return (
        <StyledCounter>
            <CounterLabel>{props.name}</CounterLabel>
            <Current>{props.counter}</Current>
            <Ticker>
                <Increase onClick={props.onIncrease}><I className="fas fa-caret-up"/></Increase>
                <Decrease onClick={props.onDecrease}><I className="fas fa-caret-down"/></Decrease>
            </Ticker>
        </StyledCounter>
    );
};

export default Counter;
