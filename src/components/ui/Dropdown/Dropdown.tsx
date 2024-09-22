import React, {PropsWithChildren} from 'react';
import {DropdownRoot} from './shards/DropdownRoot';

/* https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/
 * CHECKLIST
 *
 * Add aria-control
 * */

const Dropdown = ({children}:PropsWithChildren) => {
    return <DropdownRoot>
        <DropdownRoot.Trigger/>
        <DropdownRoot.Portal>{children}</DropdownRoot.Portal>
    </DropdownRoot>;
};

Dropdown.Root = DropdownRoot;

export default Dropdown;
