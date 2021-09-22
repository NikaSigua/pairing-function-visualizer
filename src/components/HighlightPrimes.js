import React, {useContext} from "react";
import Button from "./Button";
import {GridContext} from "./Main";


const HighlightPrimes = () => {
    const {gridState, dispatchGrid} = useContext(GridContext);

    const clickHandler = (event) => {
        event.preventDefault();
        dispatchGrid({
            type: 'SET_HIGHLIGHT_PRIMES',
            highlightPrimes: !gridState.highlightPrimes
        })
    }

    return (
        <Button onClick={clickHandler}>
            toggle highlight primes
        </Button>
    );
}

export default HighlightPrimes;