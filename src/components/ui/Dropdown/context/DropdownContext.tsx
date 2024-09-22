import { CSSProperties, createContext } from "react";

type TDropdownContext= {
    visible: boolean;
    toggleVisibility:()=>void;
    triggerRef?: React.LegacyRef<HTMLButtonElement> | undefined;
    portalRef?: React.LegacyRef<HTMLDivElement> | undefined;
    floatingPortalCss: CSSProperties
}

const DropdownContext = createContext<null | TDropdownContext>(null);

export default DropdownContext;

