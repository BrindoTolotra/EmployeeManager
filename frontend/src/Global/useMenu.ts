import { useState } from "react";
import { useMenuReturn, useMenuState } from "./types";

export const useMenu = <T>(menu: T): useMenuReturn<T> => {
    const [state, setState] = useState<useMenuState<T>>({
        isOpen: false,
        selected: menu
    });

    const setMenu = (menu: T) => {
        setState(e => ({ ...e, selected: menu }));
    };

    const toggleMenu = () => {
        setState(e => ({ ...e, isOpen: !e.isOpen }));
    };

    return {
        menuInfo: {
            selected: state.selected,
            isOpen: state.isOpen,
        },
        menuFunctions: {
            setMenu, toggleMenu
        }
    };
};