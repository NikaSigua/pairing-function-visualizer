import React, {useContext} from "react";
import Button from "./Button";
import {GridContext} from "./Main";


const ShowNumbers = () => {
    const {gridState, dispatchGrid} = useContext(GridContext);

    const clickHandler = (event) => {
        event.preventDefault();
        dispatchGrid({
            type: 'SET_SHOW_NUMBERS',
            showNumbers: !gridState.showNumbers
        })
    }
    return (
        <Button onClick={clickHandler}>
            toggle numerals
        </Button>
    );
}

export default ShowNumbers;