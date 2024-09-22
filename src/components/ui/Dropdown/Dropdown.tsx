import React, {PropsWithChildren} from 'react';
import {DropdownRoot} from './shards/DropdownRoot';
import {Portal} from './shards/DropdownPortal';
import {Trigger} from './shards/DropdownTrigger';

/* https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/
 * CHECKLIST
 *
 * Add aria-control
 * */

const Dropdown = ({children}:PropsWithChildren) => {
    return <DropdownRoot>
        <Trigger/>
        <Portal>{children}</Portal>
    </DropdownRoot>;
};

Dropdown.Root = DropdownRoot;
Dropdown.Trigger=Trigger;
Dropdown.Portal=Portal;

export default Dropdown;
