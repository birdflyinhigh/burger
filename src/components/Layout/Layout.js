import React from 'react';
import Aux from '../../hoc/axu';

const Layout = (props) => (
    <Aux>
        <div>Toolbar, SideDrawer, BackDrop</div>
        <main>
            {props.children}
        </main>
    </Aux>

);

export default Layout;