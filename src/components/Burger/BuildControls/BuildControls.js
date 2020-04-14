import React from 'react';

import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const buildControls = ( props ) => (
    <div className="BuildControls">
        <p>Current Price: <strong>{props.price.toFixed( 2 )}</strong></p>
        {  props.controls.map( ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.ingredientAdded( ctrl.type )}
                removed={() => props.ingredientRemoved( ctrl.type )}
                disabled={props.disabled[ctrl.type]} />
        ) )}
        <button
            className="OrderButton"
            disabled={!props.purchasable}
            onClick={props.ordered}>{props.isAuth ? 'ORDER NOW' : 'SIGN UP TO ORDER'}</button>
    </div>
);

export default buildControls;