import React from "react";

import {IModalProps} from "../types";

export function useModal(): IModalProps {
    const [isOpen, setIsOpen] = React.useState(false);

    const open = () => {
        setIsOpen(true);
    };

    const close = () => {
        setIsOpen(false);
    };

    return {
        isOpen,
        open,
        close,
    };
}
