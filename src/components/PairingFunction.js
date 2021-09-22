import React, {useContext} from "react";
import Dropdown from "./Dropdown";
import {GridContext} from "./Main";

const PairingFunction = () => {
    const {gridState, dispatchGrid} = useContext(GridContext);

    const selectHandler = (event) => {
        event.preventDefault();
        dispatchGrid({
            type: 'SET_PAIRING_FUNCTION',
            pairingFunction: event.target.value
        })
    }
    return (
        <Dropdown value={gridState.pairingFunction} onChange={selectHandler}>
            <option value='default'>select a pairing function ▾</option>
            <option value='cantor'>cantor (default)</option>
            <option value='boustrophedon'>boustrophedon</option>
            <option value='pigeon'>pigeon</option>
            <option value='szudzik'>szudzik</option>
        </Dropdown>
    );
}

export default PairingFunction;
