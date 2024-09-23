import React, {PropsWithChildren, useContext} from "react";
import DropdownContext from "../context/DropdownContext";

export const Content = ({children}: PropsWithChildren) => {
    const ctx = useContext(DropdownContext);

    if (ctx === null) return ctx;

    const {floatingContentCss, visible, floatingContentRef} = ctx;

    return (
        <div style={{overflowY: 'auto', ...floatingContentCss}} ref={floatingContentRef}>
            {visible && children}
        </div>
    );
};

