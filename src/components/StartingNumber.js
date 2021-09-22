import React, {useContext} from "react";
import Counter from "./Counter";
import {GridContext} from "./Main";

const StartingNumber = () => {
    const {gridState, dispatchGrid} = useContext(GridContext);

    const increase = (event) => {
        event.preventDefault();
        if (gridState.startingNumber > 200) return;
        dispatchGrid({
            type: 'SET_STARTING_NUMBER',
            startingNumber: gridState.startingNumber + 1
        })
    };
    const decrease = (event) => {
        event.preventDefault();
        if (gridState.startingNumber < 0) return;
        dispatchGrid({
            type: 'SET_STARTING_NUMBER',
            startingNumber: gridState.startingNumber - 1
        })
    };
    return (
        <Counter
            name="starting number"
            onIncrease={increase}
            onDecrease={decrease}
            counter={gridState.startingNumber}
        />
    );
}

export default StartingNumber;