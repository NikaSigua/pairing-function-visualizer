import React, {useContext} from "react";
import Button from "./Button";
import {GridContext} from "./Main";


const Transpose = () => {
    const {gridState, dispatchGrid} = useContext(GridContext);

    const clickHandler = (event) => {
        event.preventDefault();
        dispatchGrid({
            type: 'SET_TRANSPOSE',
            transpose: !gridState.transpose
        })
    }

    return (
        <Button onClick={clickHandler}>transpose</Button>
    );
}

export default Transpose;