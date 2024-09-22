import React, {PropsWithChildren, useContext} from 'react'
import DropdownContext from '../context/DropdownContext';
import ButtonPrimitive from '~/core/primitives/Button';

export const Trigger = ({children}:PropsWithChildren) => {
    const ctx = useContext(DropdownContext);

    if (ctx === null) return ctx;

    const {visible, toggleVisibility, triggerRef} = ctx;

    return (
        <ButtonPrimitive role='button' aria-expanded={visible} buttonRef={triggerRef} onClick={toggleVisibility}>{children || 'show/hide'}</ButtonPrimitive>
    );
};
