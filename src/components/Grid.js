import React, {useContext} from "react";
import styled from "styled-components";
import {GridContext} from "./Main";
import * as cantor from "../pairing-functions/cantor";
import * as boustrophedon from "../pairing-functions/boustrophedon";
import * as szudzik from "../pairing-functions/szudzik";
import * as pigeon from "../pairing-functions/pigeon";

const StyledTable = styled.table`
  border: solid black 2px;
  border-radius: 2px;
  border-spacing: 0;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
`;

const StyledTBody = styled.tbody`
  border-radius: 10px;
`;

const StyledTD = styled.td`
  border: solid black .5px;
  text-align: center;
  height: 2rem;
  width: 2rem;
`;

const Grid = () => {
    const {gridState} = useContext(GridContext);

    let pair;

    if (gridState.pairingFunction === 'cantor') {
        pair = cantor.pair;
    } else if (gridState.pairingFunction === 'boustrophedon') {
        pair = boustrophedon.pair;
    } else if (gridState.pairingFunction === 'szudzik') {
        pair = szudzik.pair;
    } else if (gridState.pairingFunction === 'pigeon') {
        pair = pigeon.pair;
    } else pair = cantor.pair;

    const grid = (grid_length = gridState.gridLength) => {
        let grid = [];

        for (let i = 0; i < grid_length; i++) {
            grid[i] = [];
            for (let j = 0; j < grid_length; j++) {
                grid[0][0] = "i \\ j";
                grid[i][0] = i;
                grid[0][j] = j;
                if (i > 0 && j > 0) {
                    !gridState.transpose ? grid[i][j] = pair(i - 1, j - 1) + gridState.startingNumber
                        : grid[i][j] = pair(j - 1, i - 1) + gridState.startingNumber;
                }
            }
        }
        return grid;
    };

    const isPrime = (x) => {
        for (let i = 2, s = Math.sqrt(x); i <= s; i++)
            if (x % i === 0) return false;
        return x > 1;
    }

    const backgroundColorHandler = (x) => {
        const hue0 = 0;
        const hue1 = 225;
        const percent = (1 / gridState.gridLength ** 2.11) * x;
        const h = percent * (hue1 - hue0) + hue0;

        let styles = {border: 0};

        const heatmap = (gridState.colorTheme === 'heatmap' ||
            gridState.colorTheme === 'default');
        const grayscale = (gridState.colorTheme === 'grayscale');
        const redblue = (gridState.colorTheme === 'red-blue');

        const primes = (gridState.highlightPrimes === true);
        const numbers = (gridState.showNumbers === true);

        const rmin = pair(0, 0);
        const rmax = pair(gridState.gridLength + 1, gridState.gridLength + 1);
        const tmin = 100;
        const tmax = -100;

        let norm = ((x - rmin) / (rmax - rmin)) * (tmax - tmin) + tmin;
        let gray = ((x - rmin) / (rmax - rmin)) * (tmax / 4 - tmin) + tmin;

        if (heatmap) {
            styles.backgroundColor = `hsl(${h}, 100%, 50%)`
        }
        if (grayscale) {
            styles.backgroundColor = `rgb(${gray}%, ${gray}%, ${gray}%)`
        }
        if (redblue) {
            styles.backgroundColor = `rgb(${norm}%, 0%, ${h}%)`
        }

        if (!numbers) {
            styles.color = styles.backgroundColor
        }
        if (primes && isPrime(x)) {
            styles.color = 'black';
            styles.backgroundColor = 'white'
        }
        return styles;
    }

    return (
        <StyledTable>
            <StyledTBody>
                {grid().map((row, i) => (
                    <tr key={i}>
                        {row.map((col, j) => (
                            (i === 0 || j === 0) ?
                                <StyledTD style={{color: 'white', backgroundColor: 'black'}} key={j}>{col}</StyledTD> :
                                <StyledTD style={backgroundColorHandler(col)} key={j}>{col}</StyledTD>
                        ))}
                    </tr>
                ))}
            </StyledTBody>
        </StyledTable>
    )
};

export default Grid;
