import React, {useContext, useEffect} from "react";
import Counter from "./Counter";
import {GridContext} from "./Main";


const GridLength = () => {
    const {gridState, dispatchGrid} = useContext(GridContext);


    useEffect(() => {
        const onResize = () => {
            dispatchGrid({
                type: 'SET_GRID_LENGTH',
                gridLength: parseInt(window.innerWidth / 48)
            })
        };
        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
        }
    }, [dispatchGrid]);


    const increase = (event) => {
        event.preventDefault();
        if (gridState.gridLength > window.innerWidth / 48) return;
        dispatchGrid({
            type: 'SET_GRID_LENGTH',
            gridLength: gridState.gridLength + 1
        })
    };
    const decrease = (event) => {
        event.preventDefault();
        if (gridState.gridLength < 3) return;
        dispatchGrid({
            type: 'SET_GRID_LENGTH',
            gridLength: gridState.gridLength - 1
        })
    };

    return (
        <Counter
            name="grid length"
            onIncrease={increase}
            onDecrease={decrease}
            counter={gridState.gridLength - 1}
        />
    );
}

export default GridLength;