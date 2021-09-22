import React, {createContext, useReducer} from "react";
import styled from "styled-components";
import ControlPanel from "./ControlPanel";
import Display from "./Display";
import PairingFunction from "./PairingFunction";
import GridLength from "./GridLength";
import StartingNumber from "./StartingNumber";
import HighlightPrimes from "./HighlightPrimes";
import ShowNumbers from "./ShowNumber";
import Transpose from "./Transpose";
import ColorTheme from "./ColorTheme";
import Grid from "./Grid";

const Shelf = styled.div`
  margin: 1px;
  padding: 1px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  align-content: stretch;
`;
const StyledMain = styled.main`
  border: black 1px solid;
  box-shadow: inset 0 1px 8px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  margin: 1px auto 1px auto;
  padding: 10px;
  display: flex;
  place-self: center;
  flex-direction: column;
  justify-content: center;
  width: fit-content;
`;

export const GridContext = createContext('default value');

export const initialState = {
    pairingFunction: 'default',
    gridLength: 13,
    startingNumber: 0,
    highlightPrimes: false,
    showNumbers: true,
    transpose: false,
    colorTheme: 'default'
};

const SET_PAIRING_FUNCTION = 'SET_PAIRING_FUNCTION';
const SET_GRID_LENGTH = 'SET_GRID_LENGTH';
const SET_STARTING_NUMBER = 'SET_STARTING_NUMBER';
const SET_HIGHLIGHT_PRIMES = 'SET_HIGHLIGHT_PRIMES';
const SET_SHOW_NUMBERS = 'SET_SHOW_NUMBERS';
const SET_TRANSPOSE = 'SET_TRANSPOSE';
const SET_COLOR_THEME = 'SET_COLOR_THEME';

const gridReducer = (state, action) => {
    switch (action.type) {
        case SET_PAIRING_FUNCTION:
            return {...state, pairingFunction: action.pairingFunction}
        case SET_GRID_LENGTH:
            return {...state, gridLength: action.gridLength}
        case SET_STARTING_NUMBER:
            return {...state, startingNumber: action.startingNumber}
        case SET_HIGHLIGHT_PRIMES:
            return {...state, highlightPrimes: action.highlightPrimes}
        case SET_SHOW_NUMBERS:
            return {...state, showNumbers: action.showNumbers}
        case SET_TRANSPOSE:
            return {...state, transpose: action.transpose}
        case SET_COLOR_THEME:
            return {...state, colorTheme: action.colorTheme}
        default:
            return initialState;
    }
};

const Main = () => {
    const [gridState, dispatchGrid] = useReducer(gridReducer, initialState);

    return (
        <StyledMain>
            <GridContext.Provider value={{gridState, dispatchGrid}}>

                <ControlPanel>
                    <Shelf>
                        <Shelf>
                            <PairingFunction/>
                        </Shelf>
                        <Shelf>
                            <GridLength/>
                            <StartingNumber/>
                        </Shelf>
                    </Shelf>
                    <Shelf>
                        <Shelf>
                            <HighlightPrimes/>
                            <ShowNumbers/>
                            <Transpose/>
                        </Shelf>
                        <Shelf>
                            <ColorTheme/>
                        </Shelf>
                    </Shelf>
                </ControlPanel>

                <Display>
                    <Grid/>
                </Display>

            </GridContext.Provider>
        </StyledMain>
    );
};

export default Main;
