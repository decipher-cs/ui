import React, {PropsWithChildren, useContext} from "react";
import DropdownContext from "../context/DropdownContext";

export const Portal = ({children}: PropsWithChildren) => {
    const ctx = useContext(DropdownContext);

    if (ctx === null) return ctx;

    const {floatingPortalCss, visible, portalRef} = ctx;

    return (
        <div style={{overflowY: 'auto', ...floatingPortalCss}} ref={portalRef}>
            {visible && children}
        </div>
    );
};

