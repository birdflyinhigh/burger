import React from 'react';
import ToolBar from '../Navigation/ToolBar/ToolBar';
import Aux from '../../hoc/axu';

import classes from './Layout.css';

const Layout = (props) => (
    <Aux>
        <ToolBar/>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>

);

export default Layout;