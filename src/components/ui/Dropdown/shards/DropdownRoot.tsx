import {Trigger} from './DropdownTrigger';
import {Portal} from './DropdownPortal';
import React, {PropsWithChildren, useEffect, useState} from 'react';
import {Placement, size, useFloating} from '@floating-ui/react';
import DropdownContext from '../context/DropdownContext';

export type DropdownProps ={
    open?: boolean
    defaultOpen?: boolean
    placement?: Placement
} & PropsWithChildren

export const DropdownRoot = ({children, open, defaultOpen = false, placement = 'bottom-start'}: DropdownProps) => {
    const [visible, setVisible] = useState(defaultOpen);

    useEffect(() => {
        open !== undefined && setVisible(open);
    }, [open]);

    const {refs, floatingStyles}= useFloating({placement, middleware: [
        size({
            apply({availableHeight, elements}) {
                elements.floating.style.maxHeight = availableHeight+'px';
            },
        }),
    ]});

    return <DropdownContext.Provider value={{visible: visible, toggleVisibility: () => setVisible((p) => !p), triggerRef: refs.setReference, portalRef: refs.setFloating, floatingPortalCss: floatingStyles}}>
        {children}
    </DropdownContext.Provider>;
};


DropdownRoot.Trigger=Trigger;
DropdownRoot.Portal=Portal;
