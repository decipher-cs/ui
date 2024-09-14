import React, {PropsWithChildren, ReactElement, useEffect, useState} from 'react';
import ButtonPrimitive from '~/core/primitives/Button';
import {Placement, UseFloatingReturn, size, useFloating} from '@floating-ui/react';

/* https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/
 * CHECKLIST
 *
 * Add aria-control
 * */

export type DropdownProps ={
    trigger?: (ref: UseFloatingReturn['refs']['setReference'])=>ReactElement
    open?: boolean
    defaultOpen?: boolean
    placement?: Placement
} & PropsWithChildren

const Dropdown = ({children, open, trigger, defaultOpen = false, placement = 'bottom-start'}: DropdownProps) => {
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

    return <div>

        {trigger ?
            trigger(refs.setReference) :
            <ButtonPrimitive role='button' aria-expanded={open} buttonRef={refs.setReference} onClick={() => setVisible((p) => !p)}>show/hide</ButtonPrimitive>
        }

        <div style={{overflowY: 'auto', ...floatingStyles}} ref={refs.setFloating}>
            {visible && children}
        </div>

    </div>;
};

export default Dropdown;
