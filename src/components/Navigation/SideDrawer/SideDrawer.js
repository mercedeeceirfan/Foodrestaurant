import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import  './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

const sideDrawer = ( props ) => {
    let attachedClasses = ["SideDrawer", "Close"];
    if (props.open) {
        attachedClasses = ["SideDrawer", "Open"];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')} >
            <span className="Close_SideDrawer" onClick={props.closed}>&times;</span>
                <div className="Logo">
                    <Logo />
                </div>
                <nav>
                    <NavigationItems isAuthenticated={props.isAuth}  close={props.closed}/>
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;