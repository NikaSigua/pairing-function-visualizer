import React, {useContext} from "react";
import Dropdown from "./Dropdown";
import {GridContext} from "./Main";

const ColorTheme = () => {
    const {gridState, dispatchGrid} = useContext(GridContext);

    const selectHandler = (event) => {
        event.preventDefault();
        dispatchGrid({
            type: 'SET_COLOR_THEME',
            colorTheme: event.target.value
        })
    }
    return (
        <Dropdown value={gridState.colorTheme} onChange={selectHandler}>
            <option value='default'>select a color theme ▾</option>
            <option value='heatmap'>heatmap (default)</option>
            <option value='grayscale'>grayscale</option>
            <option value='red-blue'>red-blue</option>
        </Dropdown>
    );
}

export default ColorTheme;